import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any) {
    this.adicionarData(transferencia);

    this.listaTransferencias.push(transferencia);
  }

  adicionarData(transferencia: any) {
    transferencia.data = new Date();
  }

}
