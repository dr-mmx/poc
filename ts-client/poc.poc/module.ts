// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgRegisterAppUser } from "./types/poc/poc/tx";
import { MsgRegisterApp } from "./types/poc/poc/tx";
import { MsgDeregisterApp } from "./types/poc/poc/tx";


export { MsgRegisterAppUser, MsgRegisterApp, MsgDeregisterApp };

type sendMsgRegisterAppUserParams = {
  value: MsgRegisterAppUser,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterAppParams = {
  value: MsgRegisterApp,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeregisterAppParams = {
  value: MsgDeregisterApp,
  fee?: StdFee,
  memo?: string
};


type msgRegisterAppUserParams = {
  value: MsgRegisterAppUser,
};

type msgRegisterAppParams = {
  value: MsgRegisterApp,
};

type msgDeregisterAppParams = {
  value: MsgDeregisterApp,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgRegisterAppUser({ value, fee, memo }: sendMsgRegisterAppUserParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterAppUser: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterAppUser({ value: MsgRegisterAppUser.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterAppUser: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterApp({ value, fee, memo }: sendMsgRegisterAppParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterApp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterApp({ value: MsgRegisterApp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterApp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeregisterApp({ value, fee, memo }: sendMsgDeregisterAppParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeregisterApp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeregisterApp({ value: MsgDeregisterApp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeregisterApp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgRegisterAppUser({ value }: msgRegisterAppUserParams): EncodeObject {
			try {
				return { typeUrl: "/poc.poc.MsgRegisterAppUser", value: MsgRegisterAppUser.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterAppUser: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterApp({ value }: msgRegisterAppParams): EncodeObject {
			try {
				return { typeUrl: "/poc.poc.MsgRegisterApp", value: MsgRegisterApp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterApp: Could not create message: ' + e.message)
			}
		},
		
		msgDeregisterApp({ value }: msgDeregisterAppParams): EncodeObject {
			try {
				return { typeUrl: "/poc.poc.MsgDeregisterApp", value: MsgDeregisterApp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeregisterApp: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			PocPoc: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;