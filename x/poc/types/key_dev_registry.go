package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DevRegistryKeyPrefix is the prefix to retrieve all DevRegistry
	DevRegistryKeyPrefix = "DevRegistry/value/"
)

// DevRegistryKey returns the store key to retrieve a DevRegistry from the index fields
func DevRegistryKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
