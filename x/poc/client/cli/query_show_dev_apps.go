package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"poc/x/poc/types"
)

var _ = strconv.Itoa(0)

func CmdShowDevApps() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-dev-apps [dev-id]",
		Short: "Query show-dev-apps",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDevId := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryShowDevAppsRequest{

				DevId: reqDevId,
			}

			res, err := queryClient.ShowDevApps(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
