import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _producto: Producto[] = [
    {
      id: 1,
      nombre: 'Jabón',
      descripcion: '---',
      precio: 25
    }
  ];

  constructor() { 
  }

  get productos(): Producto[] {
    return[...this._producto];
  }

  agregarProducto(prod: Producto){
    this._producto.push(prod);
  }

  eliminarProducto(id: number) {
    this._producto = this.productos.filter(producto => producto.id !== id);
  }
}
