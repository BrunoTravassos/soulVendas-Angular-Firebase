import { Routes } from "@angular/router";
import { CadastrarClienteComponent } from "./criar/criar.component";
import { ListarClienteComponent } from "./shared";


export const ClienteRoutes: Routes = [
  //rotas
  {
    path: 'clientes',
    redirectTo: 'clientes/listar'
  },
  {
    path: 'clientes/listar',
    component: ListarClienteComponent
  },
  {
    path: 'clientes/cadastrar',
    component: CadastrarClienteComponent
  },
  {
    path: 'clientes/editar/:id',
    component: CadastrarClienteComponent
  }
];
