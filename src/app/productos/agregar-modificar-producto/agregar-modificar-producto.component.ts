import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../servicios/producto.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule,
    NgIf],
  templateUrl: './agregar-modificar-producto.component.html',
  styleUrl: './agregar-modificar-producto.component.css'
})

export class AgregarModificarProductoComponent implements OnInit{

  productos: Producto[] = [];
  private ultimoId:number=0;
  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio: 0
  }
  formularioProducto: FormGroup;
  productoEditando: Producto | null = null;

  // reactive forms
  constructor(
    private productoService: ProductoService,
    // inyecto para usar el dormulario reactivo
    private fb: FormBuilder, private listarProdu: ListarProductosComponent
  ) { // dentro del mismo constructor colocolo las validaciones
    this.formularioProducto = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]]
    });
  }
  
  ngOnInit() {
    
    const id = this.productoService.getId();
    if (id !== null) {
      this.nuevoProducto.id = id; 
    }
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
  });
    this.productoService.obtenerProductos().subscribe(data => {
      this.ultimoId = data.length;
  });
  }

  editarProducto(producto: Producto): void {
    this.formularioProducto.patchValue(producto);
    this.productoEditando = producto;
  }

  eliminarProducto(id: number): void {
    // esto es similar al manejo de stream y lambda en Java. La 'promesa' a la que me suscribo 
    // no es mas que una expresion lambda y el resto son metodos encadenados. 
    this.productoService.eliminarProducto(id).subscribe(() => this.listarProdu.cargarProductos());
  }

  cancelarEdicion(): void {
    this.productoEditando = null;
    this.formularioProducto.reset({ id: 0, nombre: '', descripcion: '', precio: 0 });
  }

  agregar_modificar() {
    if (this.formularioProducto.valid) {
      const producto = this.formularioProducto.value;

      if (producto.id && this.productoEditando) {
        // Modificar producto
        this.productoService.modificarProducto(producto).subscribe(() => {
          this.listarProdu.cargarProductos(); // lo modifica y lo guarda
          this.cancelarEdicion(); // o se cancela la modificacion y se resetean los valores
        });
      } else {
        // Agregar nuevo producto
        this.productoService.agregarProducto(producto).subscribe(() => {
          this.listarProdu.cargarProductos();
          this.formularioProducto.reset({ id: 0, nombre: '', descripcion: '', precio: 0 });
        });
      }
    }else{
      // avisar que se toco el campo - osea no se ingresaron datos pero el usuario toco algo
      this.formularioProducto.markAsTouched();
    }    
  }
}