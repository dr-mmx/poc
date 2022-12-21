import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterAppUser } from "./types/poc/poc/tx";
import { MsgRegisterApp } from "./types/poc/poc/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/poc.poc.MsgRegisterAppUser", MsgRegisterAppUser],
    ["/poc.poc.MsgRegisterApp", MsgRegisterApp],
    
];

export { msgTypes }