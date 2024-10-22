import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from "../eliminar-producto/eliminar-producto.component";
import { ModificarProductoComponent } from "../modificar-producto/modificar-producto.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule,
    ListarProductosComponent,
    AgregarProductoComponent, 
    EliminarProductoComponent, 
    ModificarProductoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {
  
  constructor(private productoService: ProductoService){

  }

}
