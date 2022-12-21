package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

func (k msgServer) DeregisterApp(goCtx context.Context, msg *types.MsgDeregisterApp) (*types.MsgDeregisterAppResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeregisterAppResponse{}, nil
}
