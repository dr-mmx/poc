package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

// SetDevRegistry set a specific devRegistry in the store from its index
func (k Keeper) SetDevRegistry(ctx sdk.Context, devRegistry types.DevRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DevRegistryKeyPrefix))
	b := k.cdc.MustMarshal(&devRegistry)
	store.Set(types.DevRegistryKey(
		devRegistry.Index,
	), b)
}

// GetDevRegistry returns a devRegistry from its index
func (k Keeper) GetDevRegistry(
	ctx sdk.Context,
	index string,

) (val types.DevRegistry, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DevRegistryKeyPrefix))

	b := store.Get(types.DevRegistryKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDevRegistry removes a devRegistry from the store
func (k Keeper) RemoveDevRegistry(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DevRegistryKeyPrefix))
	store.Delete(types.DevRegistryKey(
		index,
	))
}

// GetAllDevRegistry returns all devRegistry
func (k Keeper) GetAllDevRegistry(ctx sdk.Context) (list []types.DevRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DevRegistryKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DevRegistry
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
