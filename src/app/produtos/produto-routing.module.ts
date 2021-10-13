import { Routes } from "@angular/router";
import { CadastrarProdutoComponent } from "./criar/criar.component";
import { ListarProdutoComponent } from "./shared";


export const ProdutoRoutes: Routes = [
  //rotas
  {
    path: 'produtos',
    redirectTo: 'produtos/listar'
  },
  {
    path: 'produtos/listar',
    component: ListarProdutoComponent
  },
  {
    path: 'produtos/cadastrar',
    component: CadastrarProdutoComponent
  },
  {
    path: 'produtos/editar/:id',
    component: CadastrarProdutoComponent
  }
];
