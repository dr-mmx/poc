package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"poc/x/poc/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group poc queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListAppRegistry())
	cmd.AddCommand(CmdShowAppRegistry())
	cmd.AddCommand(CmdListDevRegistry())
	cmd.AddCommand(CmdShowDevRegistry())
	cmd.AddCommand(CmdShowAppUsers())

	cmd.AddCommand(CmdShowAppParameters())

	// this line is used by starport scaffolding # 1

	return cmd
}
