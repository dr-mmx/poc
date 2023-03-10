package poc

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"poc/testutil/sample"
	pocsimulation "poc/x/poc/simulation"
	"poc/x/poc/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = pocsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRegisterApp = "op_weight_msg_register_app"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterApp int = 100

	opWeightMsgRegisterAppUser = "op_weight_msg_register_app_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterAppUser int = 100

	opWeightMsgDeregisterApp = "op_weight_msg_deregister_app"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeregisterApp int = 100

	opWeightMsgDeregisterAppUser = "op_weight_msg_deregister_app_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeregisterAppUser int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	pocGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&pocGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRegisterApp int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterApp, &weightMsgRegisterApp, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterApp = defaultWeightMsgRegisterApp
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterApp,
		pocsimulation.SimulateMsgRegisterApp(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRegisterAppUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterAppUser, &weightMsgRegisterAppUser, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterAppUser = defaultWeightMsgRegisterAppUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterAppUser,
		pocsimulation.SimulateMsgRegisterAppUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeregisterApp int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeregisterApp, &weightMsgDeregisterApp, nil,
		func(_ *rand.Rand) {
			weightMsgDeregisterApp = defaultWeightMsgDeregisterApp
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeregisterApp,
		pocsimulation.SimulateMsgDeregisterApp(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeregisterAppUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeregisterAppUser, &weightMsgDeregisterAppUser, nil,
		func(_ *rand.Rand) {
			weightMsgDeregisterAppUser = defaultWeightMsgDeregisterAppUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeregisterAppUser,
		pocsimulation.SimulateMsgDeregisterAppUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
