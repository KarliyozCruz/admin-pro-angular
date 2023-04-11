import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1 = [ 'Carros', 'Motos', 'Bicicletas' ];
  data1 = [400,200,300];

  labels2 = ['Prueba', 'Prueba2'];
  data2 = [50,50];

}
