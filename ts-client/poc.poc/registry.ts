import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeregisterApp } from "./types/poc/poc/tx";
import { MsgRegisterApp } from "./types/poc/poc/tx";
import { MsgDeregisterAppUser } from "./types/poc/poc/tx";
import { MsgRegisterAppUser } from "./types/poc/poc/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/poc.poc.MsgDeregisterApp", MsgDeregisterApp],
    ["/poc.poc.MsgRegisterApp", MsgRegisterApp],
    ["/poc.poc.MsgDeregisterAppUser", MsgDeregisterAppUser],
    ["/poc.poc.MsgRegisterAppUser", MsgRegisterAppUser],
    
];

export { msgTypes }