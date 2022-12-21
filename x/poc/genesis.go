package poc

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"poc/x/poc/keeper"
	"poc/x/poc/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the appRegistry
	for _, elem := range genState.AppRegistryList {
		k.SetAppRegistry(ctx, elem)
	}
	// Set all the devRegistry
	for _, elem := range genState.DevRegistryList {
		k.SetDevRegistry(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.AppRegistryList = k.GetAllAppRegistry(ctx)
	genesis.DevRegistryList = k.GetAllDevRegistry(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
