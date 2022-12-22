package keeper

import (
	"context"
    "strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"poc/x/poc/types"
)

func (k msgServer) DeregisterAppUser(goCtx context.Context, msg *types.MsgDeregisterAppUser) (*types.MsgDeregisterAppUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    app, isFound := k.GetAppRegistry(ctx, msg.AppId)

    if !isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "App not found in the registry :" + msg.AppId)
    }

    if msg.Creator != app.DevId {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Authentication error, you are not the dev" + msg.Creator)
    }

    var nUsers string

    users := strings.Split(app.Users, "!");

    // Remove user from the users list
    for _, user := range users {
        if msg.UserId != user {
            if user != "" {
                nUsers += user + "!"
            }
        }
    }
    
    app.Users = nUsers

    k.SetAppRegistry(ctx, app)

    err := ctx.EventManager().EmitTypedEvent(&types.EventDeregisterAppUser{AppId:msg.AppId, UserId:msg.UserId})

    if err != nil {
        return nil, err
    }

	return &types.MsgDeregisterAppUserResponse{}, nil
}
