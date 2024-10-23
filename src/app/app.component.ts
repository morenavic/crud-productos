import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';
import { AgregarProductoComponent } from './productos/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './productos/modificar-producto/modificar-producto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    ListarProductosComponent,
    AgregarProductoComponent, 
    EliminarProductoComponent, 
    ModificarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crud-productos';

  
}