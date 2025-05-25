import { nanoid } from "nanoid";

export class Transacao {

    readonly id: string = nanoid();
    readonly data: Date = new Date()
    constructor(
        public readonly valor: number,
        public readonly tipo: TipoTransacao        
    ) { }
   
    get valorFormatado(): number {

        return this.tipo === TipoTransacao.SAQUE ? -this.valor : this.valor;
    }

   }

export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
}
