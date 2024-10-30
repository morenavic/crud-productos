import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';
import { AgregarModificarProductoComponent } from './productos/agregar-modificar-producto/agregar-modificar-producto.component';
import { GestionarProductoComponent } from './productos/gestionar-producto/gestionar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ListarProductosComponent,
    AgregarModificarProductoComponent,
    GestionarProductoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
    title = 'crud-productos';
    
    constructor(private router: Router){}
    
    abrirProductos(): void {
      this.router.navigate(['/productos']);
    }
  
    abrirEliminar() {
      this.router.navigate(['/eliminar']);
    }

    abrirModificar() {
      this.router.navigate(['/modificar']);
    }

}