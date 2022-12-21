package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeregisterAppUser = "deregister_app_user"

var _ sdk.Msg = &MsgDeregisterAppUser{}

func NewMsgDeregisterAppUser(creator string, appId string, devId string) *MsgDeregisterAppUser {
	return &MsgDeregisterAppUser{
		Creator: creator,
		AppId:   appId,
		DevId:   devId,
	}
}

func (msg *MsgDeregisterAppUser) Route() string {
	return RouterKey
}

func (msg *MsgDeregisterAppUser) Type() string {
	return TypeMsgDeregisterAppUser
}

func (msg *MsgDeregisterAppUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeregisterAppUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeregisterAppUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
