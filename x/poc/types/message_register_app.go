package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterApp = "register_app"

var _ sdk.Msg = &MsgRegisterApp{}

func NewMsgRegisterApp(creator string, parameters string) *MsgRegisterApp {
	return &MsgRegisterApp{
		Creator:    creator,
		Parameters: parameters,
	}
}

func (msg *MsgRegisterApp) Route() string {
	return RouterKey
}

func (msg *MsgRegisterApp) Type() string {
	return TypeMsgRegisterApp
}

func (msg *MsgRegisterApp) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterApp) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterApp) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
