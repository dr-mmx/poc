import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeregisterAppUser } from "./types/poc/poc/tx";
import { MsgDeregisterApp } from "./types/poc/poc/tx";
import { MsgRegisterApp } from "./types/poc/poc/tx";
import { MsgRegisterAppUser } from "./types/poc/poc/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/poc.poc.MsgDeregisterAppUser", MsgDeregisterAppUser],
    ["/poc.poc.MsgDeregisterApp", MsgDeregisterApp],
    ["/poc.poc.MsgRegisterApp", MsgRegisterApp],
    ["/poc.poc.MsgRegisterAppUser", MsgRegisterAppUser],
    
];

export { msgTypes }