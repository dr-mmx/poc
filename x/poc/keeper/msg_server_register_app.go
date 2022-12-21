package keeper

import (
	"context"
    "encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
    "github.com/tendermint/tendermint/crypto"
	"poc/x/poc/types"
)

func (k msgServer) RegisterApp(goCtx context.Context, msg *types.MsgRegisterApp) (*types.MsgRegisterAppResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // appId is a hex encoded hash of creator public key and parameters
    appId := hex.EncodeToString(crypto.Sha256([]byte(msg.Creator + msg.Parameters)))

    // check if the appId is already registered
    _, isFound := k.GetAppRegistry(ctx, appId)

    // if appId is already registered throw an error
    if isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "App is already registered: " + appId)
    } // it prints not very nice error

    // convert the message creator address from a string into sdk.AccAddress
    developer, err := sdk.AccAddressFromBech32(msg.Creator)
    if err != nil {
        panic(err)
    }

    // convert tokens from string into sdk.Coins
    stake, err := sdk.ParseCoinsNormalized("1001token") // XXX hardcoded
    if err != nil {
        panic(err)
    }

    // send tokens from the developer to the module account
    sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, developer, types.ModuleName, stake)
    if sdkError != nil {
        return nil, sdkError
    }

    // Fill the AppRegistry
    var app = types.AppRegistry{
        Index: string(appId[:]),
        DevId: msg.Creator,
        Parameters: msg.Parameters,
        Stake: "1001token", // XXX hardcoded
    }

    // Save the new app entry into the store
    k.SetAppRegistry(ctx, app)

    return &types.MsgRegisterAppResponse{appId}, nil
}
