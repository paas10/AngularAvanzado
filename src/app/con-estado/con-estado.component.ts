import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertaConfirmacionComponent } from '../alerta-confirmacion/alerta-confirmacion.component';
import { Producto } from '../interfaces/producto';
import { Tienda } from '../models/tienda.model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent implements OnInit {
  @ViewChild(AlertaConfirmacionComponent, { static: false })
  alertChild: AlertaConfirmacionComponent = new AlertaConfirmacionComponent;

  modeloTienda: Tienda = new Tienda();
  itemsComprados: Array<Producto> = [];

  constructor() {}

  ngOnInit(): void {
  }

  onProductoSeleccionado(_evento: any) {
    this.seleccionarItem(_evento)
  }

  seleccionarItem(item: Producto) {
    this.itemsComprados.push(item)
  }

  getPrecioTotal() {
    if (this.itemsComprados) {
      return this.itemsComprados.reduce(
        (prev: number, item: Producto) => prev + (item.precio ? item.precio : 0), 0
      )
    } else return ''
  }

  realizarPago() {
    this.alertChild.mostrar();
  }

}
