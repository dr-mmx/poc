package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

func (k msgServer) DeregisterAppUser(goCtx context.Context, msg *types.MsgDeregisterAppUser) (*types.MsgDeregisterAppUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeregisterAppUserResponse{}, nil
}
