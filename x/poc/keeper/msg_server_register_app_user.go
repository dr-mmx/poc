package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"poc/x/poc/types"
)

func (k msgServer) RegisterAppUser(goCtx context.Context, msg *types.MsgRegisterAppUser) (*types.MsgRegisterAppUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

    app, isFound := k.GetAppRegistry(ctx, msg.AppId)

    if !isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "App is not in the registry: " + msg.AppId)
    }

    if msg.Creator == app.DevId {
        app.Users += msg.UserId + "!"
        k.SetAppRegistry(ctx, app)
    } else {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Unauthorized access to the app: " + msg.AppId)
    }

    err := ctx.EventManager().EmitTypedEvent(&types.EventRegisterAppUser{AppId:msg.AppId, UserId:msg.UserId})

    if err != nil {
        return nil, err
    }

	return &types.MsgRegisterAppUserResponse{}, nil
}
