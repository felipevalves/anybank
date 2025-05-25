import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao = "";
  tipoTransacao = "";

  transacaoCriada = output<Transacao>();

  tipoTransacaoEnum = TipoTransacao;

  aoSubmeter() {
    
    const transacao = new Transacao(Number(this.valorTransacao), this.tipoTransacao as TipoTransacao);

    this.transacaoCriada.emit(transacao);

    this.valorTransacao = "";
    this.tipoTransacao = "";
  }
}
