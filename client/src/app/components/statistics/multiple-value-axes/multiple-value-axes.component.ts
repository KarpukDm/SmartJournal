import {Component, Input, OnInit} from '@angular/core';
import {StatisticsService} from "../../../services/statistics.service";
import {AverageScoreModel} from "../types/average-score.model";

declare var AmCharts: any;
declare var chart: any;

@Component({
  selector: 'multiple-value-axes',
  templateUrl: './multiple-value-axes.component.html',
  styleUrls: ['./multiple-value-axes.component.css']
})
export class MultipleValueAxesComponent implements OnInit {

  @Input() scores: AverageScoreModel[];

  private chart: any;

  private averageScores: AverageScoreModel[];

  constructor(private statisticsService: StatisticsService) {
    this.averageScores = [];
  }

  ngOnInit() {

    this.statisticsService.getAverageScore()
      .subscribe(x => {
        console.log(x);
        this.averageScores = x;
        console.log(JSON.stringify(this.averageScores));
        this.updateStatistics();
      });
  }

  updateStatistics() {
    this.chart = AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "light",
      "marginTop": 0,
      "marginRight": 80,
      "dataProvider": this.averageScores,
      "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
      }],
      "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "gridAlpha": 0,
        "color": "#888888",
        "scrollbarHeight": 55,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "autoGridCount": true,
        "selectedGraphFillAlpha": 0,
        "graphLineAlpha": 0.2,
        "graphLineColor": "#c2c2c2",
        "selectedGraphLineColor": "#888888",
        "selectedGraphLineAlpha": 1

      },
      "chartCursor": {
        "categoryBalloonDateFormat": "DD.MM.YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true
      },
      "dataDateFormat": "DD.MM.YYYY",
      "categoryField": "year",
      "categoryAxis": {
        "labelRotation": 45,
        "dateFormats": [{
          "period": 'YYYY',
          "format": 'DD MMM YYYY'
        }],
        "categoryBalloonDateFormat": "DD.MM.YYYY",
        "minPeriod": "YYYY",
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true
      }
    });
  }

  zoomChart() {
    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
  }

  @Input('averageScores')
  set setAverageScores(value: AverageScoreModel[]) {
    this.averageScores = value;
    this.updateStatistics();
    //this.ngOnInit();
  }
}
