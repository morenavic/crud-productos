import { Routes } from '@angular/router';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';
import { AgregarModificarProductoComponent } from './productos/agregar-modificar-producto/agregar-modificar-producto.component';
import { GestionarProductoComponent} from './productos/gestionar-producto/gestionar-producto.component';

export const routes: Routes = [
    {path: 'productos', component: ListarProductosComponent},
    {path: 'agregar',  component: AgregarModificarProductoComponent},
    {path: 'modificar',  component: GestionarProductoComponent},
    {path: '**', redirectTo: 'listar-productos', pathMatch: 'full'}   
];
