package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

func (k msgServer) RegisterApp(goCtx context.Context, msg *types.MsgRegisterApp) (*types.MsgRegisterAppResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRegisterAppResponse{}, nil
}
