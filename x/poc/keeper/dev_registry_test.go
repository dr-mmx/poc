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

func createNDevRegistry(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DevRegistry {
	items := make([]types.DevRegistry, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetDevRegistry(ctx, items[i])
	}
	return items
}

func TestDevRegistryGet(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNDevRegistry(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDevRegistry(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDevRegistryRemove(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNDevRegistry(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDevRegistry(ctx,
			item.Index,
		)
		_, found := keeper.GetDevRegistry(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestDevRegistryGetAll(t *testing.T) {
	keeper, ctx := keepertest.PocKeeper(t)
	items := createNDevRegistry(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDevRegistry(ctx)),
	)
}
