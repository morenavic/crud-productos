import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {
  
  constructor(private productoService: ProductoService){

  }
  
  get productos(){
    return this.productoService.productos
  }

  eliminar(id: number) {
    this.productoService.eliminarProducto(id);
  }

}
