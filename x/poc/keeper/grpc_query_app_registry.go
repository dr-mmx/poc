package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"poc/x/poc/types"
)

func (k Keeper) AppRegistryAll(c context.Context, req *types.QueryAllAppRegistryRequest) (*types.QueryAllAppRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var appRegistrys []types.AppRegistry
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	appRegistryStore := prefix.NewStore(store, types.KeyPrefix(types.AppRegistryKeyPrefix))

	pageRes, err := query.Paginate(appRegistryStore, req.Pagination, func(key []byte, value []byte) error {
		var appRegistry types.AppRegistry
		if err := k.cdc.Unmarshal(value, &appRegistry); err != nil {
			return err
		}

		appRegistrys = append(appRegistrys, appRegistry)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAppRegistryResponse{AppRegistry: appRegistrys, Pagination: pageRes}, nil
}

func (k Keeper) AppRegistry(c context.Context, req *types.QueryGetAppRegistryRequest) (*types.QueryGetAppRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAppRegistry(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAppRegistryResponse{AppRegistry: val}, nil
}
