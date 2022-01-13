import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta-confirmacion',
  templateUrl: './alerta-confirmacion.component.html',
  styleUrls: ['./alerta-confirmacion.component.css']
})
export class AlertaConfirmacionComponent implements OnInit {

  public active: Boolean;

  constructor() { 
    this.active = false;
  }

  ngOnInit(): void {
  }

  mostrar() {
    this.active = true;
  }

  ocultar() {
    this.active = false;
  }

}
