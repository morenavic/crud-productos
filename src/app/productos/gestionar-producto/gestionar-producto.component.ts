import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [NgFor
  ],
  templateUrl: './gestionar-producto.component.html',
  styleUrl: './gestionar-producto.component.css'
})

export class GestionarProductoComponent {
  
  constructor(private productoService: ProductoService,
    private router: Router){

  }

  pasarIdProducto(id: number) {
    this.productoService.setId(id);
  }

  get productos(){
    return this.productoService.productos
  }

  eliminar(id: number) {
    this.productoService.eliminarProducto(id);
    alert('El producto con ID('+id+') se elimino correctamente.');
  }

  abrirAgregar() {
    this.router.navigate(['/agregar']);
  }

}
