package poc_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "poc/testutil/keeper"
	"poc/testutil/nullify"
	"poc/x/poc"
	"poc/x/poc/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PocKeeper(t)
	poc.InitGenesis(ctx, *k, genesisState)
	got := poc.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
