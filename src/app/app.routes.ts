import { Routes } from '@angular/router';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';
import { AgregarProductoComponent } from './productos/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './productos/modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

export const routes: Routes = [
    {path: 'productos', component: ListarProductosComponent},
    {path: 'agregar',  component: AgregarProductoComponent},
    {path: 'modificar',  component: ModificarProductoComponent},
    // , loadChildren: () => import('./productos/eliminar-producto/eliminar-producto.component').then(e => e.EliminarProductoComponent)
    {path: 'eliminar', component: EliminarProductoComponent},
    {path: '**', redirectTo: 'listar-productos', pathMatch: 'full'}

    
];
