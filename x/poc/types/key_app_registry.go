package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AppRegistryKeyPrefix is the prefix to retrieve all AppRegistry
	AppRegistryKeyPrefix = "AppRegistry/value/"
)

// AppRegistryKey returns the store key to retrieve a AppRegistry from the index fields
func AppRegistryKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
