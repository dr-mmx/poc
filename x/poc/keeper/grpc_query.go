package keeper

import (
	"poc/x/poc/types"
)

var _ types.QueryServer = Keeper{}
