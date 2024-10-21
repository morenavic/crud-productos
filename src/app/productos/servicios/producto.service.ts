import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _producto: Producto[] = [
    {
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

  agregarCurso(prod: Producto){
    this._producto.push(prod);
  }
}
