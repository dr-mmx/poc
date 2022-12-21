package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterAppUser = "register_app_user"

var _ sdk.Msg = &MsgRegisterAppUser{}

func NewMsgRegisterAppUser(creator string, appId string, userId string) *MsgRegisterAppUser {
	return &MsgRegisterAppUser{
		Creator: creator,
		AppId:   appId,
		UserId:  userId,
	}
}

func (msg *MsgRegisterAppUser) Route() string {
	return RouterKey
}

func (msg *MsgRegisterAppUser) Type() string {
	return TypeMsgRegisterAppUser
}

func (msg *MsgRegisterAppUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterAppUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterAppUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
