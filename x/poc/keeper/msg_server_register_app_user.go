package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

func (k msgServer) RegisterAppUser(goCtx context.Context, msg *types.MsgRegisterAppUser) (*types.MsgRegisterAppUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRegisterAppUserResponse{}, nil
}
