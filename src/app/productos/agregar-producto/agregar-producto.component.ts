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

constructor(private productoService: ProductoService){

}

nuevoProducto: Producto = {
  nombre: '',
  descripcion:'',
  precio: 0
}

agregar() {
  this.productoService.agregarCurso(this.nuevoProducto);
  this.nuevoProducto = {
    nombre: '',
    descripcion:'',
    precio: 0
  }
}
}
