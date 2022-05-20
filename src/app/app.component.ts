import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  valor:    number;
  destino:  number;

  transferirAppComponent($event) {
    console.log($event);
    this.valor    = $event.valor;
    this.destino  = $event.destino;
  }
}
