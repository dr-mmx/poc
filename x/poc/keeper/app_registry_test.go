package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "poc/testutil/keeper"
	"poc/testutil/nullify"
	"poc/x/poc/keeper"
	"poc/x/poc/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAppRegistry(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AppRegistry {
	items := make([]types.AppRegistry, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetAppRegistry(ctx, items[i])
	}
	return items
}

func TestAppRegistryGet(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNAppRegistry(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAppRegistry(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAppRegistryRemove(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNAppRegistry(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAppRegistry(ctx,
			item.Index,
		)
		_, found := keeper.GetAppRegistry(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestAppRegistryGetAll(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNAppRegistry(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAppRegistry(ctx)),
	)
}
