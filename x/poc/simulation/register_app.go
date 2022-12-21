package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"poc/x/poc/keeper"
	"poc/x/poc/types"
)

func SimulateMsgRegisterApp(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgRegisterApp{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the RegisterApp simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "RegisterApp simulation not implemented"), nil, nil
	}
}
