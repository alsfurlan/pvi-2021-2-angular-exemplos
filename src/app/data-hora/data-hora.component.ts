import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  // dataHora: string;
  dataHora: Date;

  constructor() {
    // this.dataHora = new Date().toLocaleString();
    this.dataHora = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.dataHora = new Date();
    }, 1000);
  }

}
