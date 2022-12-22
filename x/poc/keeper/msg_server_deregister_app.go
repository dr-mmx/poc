package keeper

import (
	"context"
    "strings"

    "github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"poc/x/poc/types"
)

func (k msgServer) DeregisterApp(goCtx context.Context, msg *types.MsgDeregisterApp) (*types.MsgDeregisterAppResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    app, isFound := k.GetAppRegistry(ctx, msg.AppId)

    if !isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "App not found in the registry :" + msg.AppId)
    }

    if msg.Creator != app.DevId {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Authenitacation error, you are not the dev :" + msg.Creator)
    }

    dev, isFound := k.GetDevRegistry(ctx, msg.Creator)
    
    if !isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Registries out of sync: MAJOR ERROR that should never happen!!!")
    }

    //k.DeleteDevRegistry(ctx, dev)

    var nApps string
    apps := strings.Split(dev.Apps, "!")
    appsLen := len(apps)
    for _, app := range apps {
        if msg.AppId != app {
            if app != "" {
                nApps += app + "!"
            }
        } else {
            appsLen--
        }
    }

    dev.Apps = nApps
    k.SetDevRegistry(ctx, dev)

    if nApps == "" {
        // no more apps in the store
        devStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DevRegistryKeyPrefix))
        devStore.Delete(types.AppRegistryKey(dev.Index))
    }

    //DeleteAppRegistry(ctx, app)
    appStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AppRegistryKeyPrefix))
    appStore.Delete(types.AppRegistryKey(app.Index))

    err := ctx.EventManager().EmitTypedEvent(&types.EventDeregisterApp{AppId:msg.AppId})

    if err != nil {
        return nil, err
    }

	return &types.MsgDeregisterAppResponse{}, nil
}
