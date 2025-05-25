import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //para inicializar propriedades do componente que serão alteradas, reativo
  transacoes = signal<Transacao[]>([]);

  //computed é sempre executado quando uma propriedade reativa é alterada, no caso this.transacoes.update
  saldo = computed(() => {
    return this.transacoes().reduce((acumulador , transacaoAtual) => {
      return acumulador  + (transacaoAtual.tipo === TipoTransacao.DEPOSITO ? transacaoAtual.valor : -transacaoAtual.valor);
    }, 0);
  });

  processarTransacao(transacao: Transacao) {

    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!');
    }
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
