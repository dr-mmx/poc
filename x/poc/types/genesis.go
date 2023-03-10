package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		AppRegistryList: []AppRegistry{},
		DevRegistryList: []DevRegistry{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in appRegistry
	appRegistryIndexMap := make(map[string]struct{})

	for _, elem := range gs.AppRegistryList {
		index := string(AppRegistryKey(elem.Index))
		if _, ok := appRegistryIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for appRegistry")
		}
		appRegistryIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in devRegistry
	devRegistryIndexMap := make(map[string]struct{})

	for _, elem := range gs.DevRegistryList {
		index := string(DevRegistryKey(elem.Index))
		if _, ok := devRegistryIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for devRegistry")
		}
		devRegistryIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
