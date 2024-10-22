import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../servicios/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

ultimoId: number = 0;
  productos: Producto[] | undefined;

  constructor(private productoService: ProductoService){}
    
  ngOnInit() {
    this.productos = this.productoService.productos;
    this.ultimoId = this.productos.length; 
    }
  

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio: 0
  }

  agregar() {
    this.ultimoId++;  
    this.nuevoProducto.id = this.ultimoId;
    
    this.productoService.agregarProducto(this.nuevoProducto);
    
    this.nuevoProducto = {
      id: 0,
      nombre: '',
      descripcion:'',
      precio: 0
    }
  }
  }
    function ngOnInit() {
      throw new Error('Function not implemented.');
    }
  
