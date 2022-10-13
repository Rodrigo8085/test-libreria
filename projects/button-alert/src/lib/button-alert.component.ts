import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-alert',
  templateUrl: './lib-button-alert.html',
  styleUrls: ['lib-button-alert.scss']

})
export class ButtonAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alerta(): void {
    alert('Hola soy un alert que viene desde una libreria de node');
  }

}
