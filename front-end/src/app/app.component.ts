import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Al valor que yo quiera';

  peliculas = [{
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
    titulo: 'Moana',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  }]

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
