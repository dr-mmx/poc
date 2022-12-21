import { Client, registry, MissingWalletError } from 'poc-client-ts'

import { AppRegistry } from "poc-client-ts/poc.poc/types"
import { DevRegistry } from "poc-client-ts/poc.poc/types"
import { Params } from "poc-client-ts/poc.poc/types"


export { AppRegistry, DevRegistry, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				AppRegistry: {},
				AppRegistryAll: {},
				DevRegistry: {},
				DevRegistryAll: {},
				ShowAppUsers: {},
				ShowAppParameters: {},
				
				_Structure: {
						AppRegistry: getStructure(AppRegistry.fromPartial({})),
						DevRegistry: getStructure(DevRegistry.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getAppRegistry: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AppRegistry[JSON.stringify(params)] ?? {}
		},
				getAppRegistryAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AppRegistryAll[JSON.stringify(params)] ?? {}
		},
				getDevRegistry: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DevRegistry[JSON.stringify(params)] ?? {}
		},
				getDevRegistryAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DevRegistryAll[JSON.stringify(params)] ?? {}
		},
				getShowAppUsers: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ShowAppUsers[JSON.stringify(params)] ?? {}
		},
				getShowAppParameters: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ShowAppParameters[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: poc.poc initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAppRegistry({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryAppRegistry( key.index)).data
				
					
				commit('QUERY', { query: 'AppRegistry', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAppRegistry', payload: { options: { all }, params: {...key},query }})
				return getters['getAppRegistry']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAppRegistry API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAppRegistryAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryAppRegistryAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.PocPoc.query.queryAppRegistryAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AppRegistryAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAppRegistryAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAppRegistryAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAppRegistryAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDevRegistry({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryDevRegistry( key.index)).data
				
					
				commit('QUERY', { query: 'DevRegistry', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDevRegistry', payload: { options: { all }, params: {...key},query }})
				return getters['getDevRegistry']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDevRegistry API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDevRegistryAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryDevRegistryAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.PocPoc.query.queryDevRegistryAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DevRegistryAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDevRegistryAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDevRegistryAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDevRegistryAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryShowAppUsers({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryShowAppUsers( key.appId)).data
				
					
				commit('QUERY', { query: 'ShowAppUsers', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryShowAppUsers', payload: { options: { all }, params: {...key},query }})
				return getters['getShowAppUsers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryShowAppUsers API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryShowAppParameters({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.PocPoc.query.queryShowAppParameters( key.appId)).data
				
					
				commit('QUERY', { query: 'ShowAppParameters', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryShowAppParameters', payload: { options: { all }, params: {...key},query }})
				return getters['getShowAppParameters']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryShowAppParameters API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgDeregisterAppUser({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.PocPoc.tx.sendMsgDeregisterAppUser({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeregisterAppUser:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeregisterAppUser:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeregisterApp({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.PocPoc.tx.sendMsgDeregisterApp({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeregisterApp:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeregisterApp:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterApp({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.PocPoc.tx.sendMsgRegisterApp({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterApp:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegisterApp:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterAppUser({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.PocPoc.tx.sendMsgRegisterAppUser({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterAppUser:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegisterAppUser:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgDeregisterAppUser({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.PocPoc.tx.msgDeregisterAppUser({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeregisterAppUser:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeregisterAppUser:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeregisterApp({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.PocPoc.tx.msgDeregisterApp({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeregisterApp:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeregisterApp:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegisterApp({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.PocPoc.tx.msgRegisterApp({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterApp:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegisterApp:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegisterAppUser({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.PocPoc.tx.msgRegisterAppUser({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterAppUser:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegisterAppUser:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
