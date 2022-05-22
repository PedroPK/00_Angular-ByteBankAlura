import { Transferencia } from 'src/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferenciasExtrato:    any[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
      // Once the method 'getAllTransfers()' returns an Observable, we need to subscribe() on it to be notified when this asynchronous response is ready
      this.transferenciaService.getAllTransfers().subscribe(
        (transferencias: Transferencia[]) => {
          console.table(transferencias);
          this.transferenciasExtrato = transferencias
        }
      );
  }

}
