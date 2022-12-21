package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"poc/x/poc/types"
)

func (k Keeper) ShowDevApps(goCtx context.Context, req *types.QueryShowDevAppsRequest) (*types.QueryShowDevAppsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryShowDevAppsResponse{}, nil
}
