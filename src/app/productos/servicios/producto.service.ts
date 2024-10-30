import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private id: any;

  private _producto: Producto[] = [
    { id: 1, nombre: 'Jabón', descripcion: 'Jabón de glicerina', precio: 25 },
    { id: 2, nombre: 'Champú', descripcion: 'Champú hidratante', precio: 30 },
    { id: 3, nombre: 'Acondicionador', descripcion: 'Acondicionador reparador', precio: 28 },
    { id: 4, nombre: 'Crema Hidratante', descripcion: 'Crema para piel seca', precio: 45 },
    { id: 5, nombre: 'Protector Solar', descripcion: 'Protección SPF 50', precio: 60 },
    { id: 6, nombre: 'Exfoliante', descripcion: 'Exfoliante facial', precio: 35 },
    { id: 7, nombre: 'Mascarilla Facial', descripcion: 'Mascarilla de arcilla', precio: 40 },
    { id: 8, nombre: 'Gel Antibacterial', descripcion: 'Gel con aloe vera', precio: 20 },
    { id: 9, nombre: 'Perfume', descripcion: 'Perfume floral', precio: 80 },
    { id: 10, nombre: 'Desodorante', descripcion: 'Desodorante sin aluminio', precio: 25 },
    { id: 11, nombre: 'Crema para Manos', descripcion: 'Crema nutritiva', precio: 30 },
    { id: 12, nombre: 'Bálsamo Labial', descripcion: 'Bálsamo hidratante', precio: 15 },
    { id: 13, nombre: 'Aceite Esencial', descripcion: 'Aceite de lavanda', precio: 50 },
    { id: 14, nombre: 'Gel de Ducha', descripcion: 'Gel suave para la piel', precio: 30 },
    { id: 15, nombre: 'Tónico Facial', descripcion: 'Tónico equilibrante', precio: 35 }
  ];

  constructor() { }
  
  setId(valor: any) {
    this.id = valor;
  }

  getId() {
    return this.id;
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

  modificarProducto(id: number, prodModificado: Producto) {
    const index = this._producto.findIndex(prod => prod.id === id); 
  
    if (index !== -1) { 
      this._producto[index] = { ...this._producto[index], ...prodModificado }; 
    }
  }

}
