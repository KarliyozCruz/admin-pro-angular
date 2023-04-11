import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title = 'Sin titulo';
  @Input() data: number[] = [];
  @Input('labels') public doughnutChartLabels: string[] = [  'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
    ]
  };

  ngOnInit(): void {
    if(this.data.length > 0){
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {data: this.data}
        ]
      }
    }
  }

}
