import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule,
    NgIf],
  templateUrl: './agregar-modificar-producto.component.html',
  styleUrl: './agregar-modificar-producto.component.css'
})

export class AgregarModificarProductoComponent {

  productos: Producto[] | undefined;
  private ultimoId:number=0;

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio: 0
  }

  constructor(private productoService: ProductoService){}

  ngOnInit() {
    
    const id = this.productoService.getId();
    if (id !== null) {
      this.nuevoProducto.id = id; 
    }

    this.productos = this.productoService.productos;
    this.ultimoId = this.productoService.productos.length;
  }


  agregar_modificar(id:number) {
    
    if(id>0){ // modificar

      const productoModificado: Producto = {
      id: this.nuevoProducto.id, 
      nombre: this.nuevoProducto.nombre, 
      descripcion: this.nuevoProducto.descripcion, 
      precio: this.nuevoProducto.precio 
      };
  
      this.productoService.modificarProducto(productoModificado.id, productoModificado);
      alert('El producto con ID('+id+') se modificó correctamente.');

    }else{ // agregar
    
      this.ultimoId++;  
      this.nuevoProducto.id = this.ultimoId;
      
      this.productoService.agregarProducto(this.nuevoProducto);

      this.nuevoProducto = {
        id: 0,
        nombre: '',
        descripcion:'',
        precio: 0
    
      }
      alert('El producto se agregó correctamente.');
    }
    
  }
}