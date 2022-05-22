import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private client: HttpClient) {
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
    transferencia.date = new Date();
  }

  getAllTransfers(): Observable<Transferencia[]> {
    return this.client.get<Transferencia[]>(this.url);
  }

}
