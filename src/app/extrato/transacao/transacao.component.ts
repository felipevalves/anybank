import { Component, Input, input } from '@angular/core';
import { Transacao } from '../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {

    transacao = input.required<Transacao>();

}
