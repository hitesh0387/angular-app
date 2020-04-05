import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';
import { Data, Layout } from 'plotly.js';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.plotHistogramChart();
  }

  private plotHistogramChart(): void {
    const chartLayout: Partial<Layout> = {
      'title': 'PPM Histogram',
      'xaxis': {
        'title': 'Concentration Range (PPM)'
      },
      'yaxis': {
        'title': 'Sensor count'
      }
    };

    const x: string[] = ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300', '3300-350', '350-400',
      '400-500', '500-550', '550-600', '600-650', '650-700', '700-750', '750-800', '800-850', '850-900', '900-950', '950-1000'];
    const y: number[] = [50, 10, 5, 6, 5, 1, 2, 4, 3, 2, 1, 0, 0, 2, 1, 0, 0, 1, 3];

    /* for (let i = 0; i < 500; i++) {
      x[i] = Math.random();
    } */

    const raindanceProduction: Data = {
      'type': 'scatter',
      'name': 'Raindance Production',
      'mode': 'lines+markers',
      'x': x,
      'y': y
    };

    const x1: string[] = ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300', '3300-350', '350-400',
      '400-500', '500-550', '550-600', '600-650', '650-700', '700-750', '750-800', '800-850', '850-900', '900-950', '950-1000'];
    const y1: number[] = [55, 12, 6, 7, 6, 2, 1, 7, 6, 3, 8, 5, 7, 8, 3, 0, 0, 1, 4];

    const raindanceWell: Data = {
      'type': 'scatter',
      'name': 'Raindance Well',
      'mode': 'lines+markers',
      'x': x1,
      'y': y1
    };

    // const config: 

    Plotly.newPlot('histogram-chart', [raindanceProduction, raindanceWell], chartLayout);
  }
}
