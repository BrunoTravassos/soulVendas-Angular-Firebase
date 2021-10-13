import { Routes } from "@angular/router";
import { CadastrarFuncionarioComponent } from "./criar/criar.component";
import { ListarFuncionarioComponent } from "./shared";


export const FuncionarioRoutes: Routes = [
  //rotas
  {
    path: 'funcionarios',
    redirectTo: 'funcionarios/listar'
  },
  {
    path: 'funcionarios/listar',
    component: ListarFuncionarioComponent
  },
  {
    path: 'funcionarios/cadastrar',
    component: CadastrarFuncionarioComponent
  },
  {
    path: 'funcionarios/editar/:id',
    component: CadastrarFuncionarioComponent
  }
];
