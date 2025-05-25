import { nanoid } from "nanoid";

export class Transacao {

    readonly id: string = nanoid();
    constructor(
        public readonly valor: number,
        public readonly tipo: TipoTransacao,
        public readonly data: Date = new Date()
    ) { }
   
   }

export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
}
