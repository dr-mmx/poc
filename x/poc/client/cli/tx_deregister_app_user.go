package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"poc/x/poc/types"
)

var _ = strconv.Itoa(0)

func CmdDeregisterAppUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "deregister-app-user [app-id] [dev-id]",
		Short: "Broadcast message deregister-app-user",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAppId := args[0]
			argDevId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeregisterAppUser(
				clientCtx.GetFromAddress().String(),
				argAppId,
				argDevId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
