import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferenciasAppComponent:  any[]   = [];

  transferirAppComponent($event) {
    console.log($event);

    const transferenciaComData = {
      ...$event,
      date: new Date()
    }

    this.transferenciasAppComponent.push(transferenciaComData);
  }
}
