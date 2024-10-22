import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modificar-producto.component.html',
  styleUrl: './modificar-producto.component.css'
})
export class ModificarProductoComponent {
  constructor(private productoService: ProductoService){

  }
  
  get productos(){
    return this.productoService.productos
  }

  modificar() {

}

}
