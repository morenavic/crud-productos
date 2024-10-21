import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  constructor(private productoService: ProductoService){

  }

  get productos(){
    return this.productoService.productos
  }
}
