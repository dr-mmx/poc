package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "poc/testutil/keeper"
	"poc/x/poc/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.PocKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
