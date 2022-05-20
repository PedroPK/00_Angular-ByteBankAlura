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
    console.log('Uma nova transferência foi solicitada.');

    // Object with both values
    const tranferencia = {
      valor:    this.valor,
      destino:  this.destino
    }

    // Sending object to App Component Template
    this.aoTransferir.emit(tranferencia);

    // Cleaning the attributes
    this.limparCampos();
  }

  limparCampos() {
    this.valor    = null;
    this.destino  = null;
  }

}
