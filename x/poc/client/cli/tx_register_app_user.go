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

func CmdRegisterAppUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "register-app-user [app-id] [user-id]",
		Short: "Broadcast message register-app-user",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAppId := args[0]
			argUserId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterAppUser(
				clientCtx.GetFromAddress().String(),
				argAppId,
				argUserId,
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
