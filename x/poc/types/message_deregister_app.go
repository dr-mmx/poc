package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeregisterApp = "deregister_app"

var _ sdk.Msg = &MsgDeregisterApp{}

func NewMsgDeregisterApp(creator string, appId string) *MsgDeregisterApp {
	return &MsgDeregisterApp{
		Creator: creator,
		AppId:   appId,
	}
}

func (msg *MsgDeregisterApp) Route() string {
	return RouterKey
}

func (msg *MsgDeregisterApp) Type() string {
	return TypeMsgDeregisterApp
}

func (msg *MsgDeregisterApp) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeregisterApp) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeregisterApp) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
