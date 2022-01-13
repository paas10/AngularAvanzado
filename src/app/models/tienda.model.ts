import { Producto } from "../interfaces/producto"

export class Tienda {

  tiendaItems: Array<Producto>

  constructor() {
    this.tiendaItems = [
      {
        texto: 'Marca SHEIN',
        titulo: 'Conjunto Blusa/Falda blanco',
        imagen: 'img1.jpg',
        precio: 290
      },
      {
        texto: 'Marca SHEIN',
        titulo: 'Traje de baño de bananos',
        imagen: 'img2.jpg',
        precio: 180
      },
      {
        texto: 'Marca SHEIN',
        titulo: 'Sueter colorido',
        imagen: 'img3.jpg',
        precio: 275
      }
    ]
  }
}
