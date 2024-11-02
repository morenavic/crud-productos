import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit{
  
  prod:Producto[]=[];
  constructor(private productoService: ProductoService){
  }

  // cuando se inicializa el componente lo primero que hace es llamar o hacer lo que tiene aca adentro
  // esto se hace asi porque no hay otra cosa que active ese metodo
  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.obtenerProductos().subscribe(data => {
      this.prod = data;
    });
  }
}
