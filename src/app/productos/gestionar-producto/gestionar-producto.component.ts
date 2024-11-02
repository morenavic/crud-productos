import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gestionar-producto',
  standalone: true,
  imports:[NgFor],
  templateUrl: './gestionar-producto.component.html',
  styleUrls: ['./gestionar-producto.component.css']
})
export class GestionarProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.obtenerProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  pasarIdProducto(id: number) {
    this.productoService.setId(id);
  }

  eliminar(id: number) {
    this.productoService.eliminarProducto(id);
    console.log(`El producto con ID (${id}) se eliminó correctamente.`);
  }

  abrirAgregar() {
    this.router.navigate(['/agregar']);
  }
}
