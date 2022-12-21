package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRegisterApp{}, "poc/RegisterApp", nil)
	cdc.RegisterConcrete(&MsgRegisterAppUser{}, "poc/RegisterAppUser", nil)
	cdc.RegisterConcrete(&MsgDeregisterApp{}, "poc/DeregisterApp", nil)
	cdc.RegisterConcrete(&MsgDeregisterAppUser{}, "poc/DeregisterAppUser", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterApp{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterAppUser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeregisterApp{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeregisterAppUser{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
