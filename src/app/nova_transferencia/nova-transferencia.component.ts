import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor:    number;
  destino:  number;

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    console.log('Uma nova trasnferência foi solicitada.');

    const tranferencia = {
      valor:    this.valor,
      destino:  this.destino
    }

    this.aoTransferir.emit(tranferencia);
  }
}
