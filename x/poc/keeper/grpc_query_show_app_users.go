package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"poc/x/poc/types"
)

func (k Keeper) ShowAppUsers(goCtx context.Context, req *types.QueryShowAppUsersRequest) (*types.QueryShowAppUsersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

    appRegistry, isFound := k.GetAppRegistry(ctx, req.AppId)

    if !isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "App is not found: " + req.AppId)
    }

    return &types.QueryShowAppUsersResponse{Users: appRegistry.Users}, nil
}
