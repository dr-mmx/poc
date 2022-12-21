package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/types"
)

// SetAppRegistry set a specific appRegistry in the store from its index
func (k Keeper) SetAppRegistry(ctx sdk.Context, appRegistry types.AppRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AppRegistryKeyPrefix))
	b := k.cdc.MustMarshal(&appRegistry)
	store.Set(types.AppRegistryKey(
		appRegistry.Index,
	), b)
}

// GetAppRegistry returns a appRegistry from its index
func (k Keeper) GetAppRegistry(
	ctx sdk.Context,
	index string,

) (val types.AppRegistry, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AppRegistryKeyPrefix))

	b := store.Get(types.AppRegistryKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAppRegistry removes a appRegistry from the store
func (k Keeper) RemoveAppRegistry(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AppRegistryKeyPrefix))
	store.Delete(types.AppRegistryKey(
		index,
	))
}

// GetAllAppRegistry returns all appRegistry
func (k Keeper) GetAllAppRegistry(ctx sdk.Context) (list []types.AppRegistry) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AppRegistryKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AppRegistry
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
