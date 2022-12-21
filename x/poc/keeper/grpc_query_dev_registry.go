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

func (k Keeper) DevRegistryAll(c context.Context, req *types.QueryAllDevRegistryRequest) (*types.QueryAllDevRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var devRegistrys []types.DevRegistry
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	devRegistryStore := prefix.NewStore(store, types.KeyPrefix(types.DevRegistryKeyPrefix))

	pageRes, err := query.Paginate(devRegistryStore, req.Pagination, func(key []byte, value []byte) error {
		var devRegistry types.DevRegistry
		if err := k.cdc.Unmarshal(value, &devRegistry); err != nil {
			return err
		}

		devRegistrys = append(devRegistrys, devRegistry)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDevRegistryResponse{DevRegistry: devRegistrys, Pagination: pageRes}, nil
}

func (k Keeper) DevRegistry(c context.Context, req *types.QueryGetDevRegistryRequest) (*types.QueryGetDevRegistryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetDevRegistry(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDevRegistryResponse{DevRegistry: val}, nil
}
