//Arquivo de Rotas
import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { ClienteRoutes } from "./cliente";
import { FuncionarioRoutes } from "./funcionarios";
import { ProdutoRoutes } from "./produtos";
import { TarefaRoutes } from "./tarefas";

export const router: Routes = [
   {path: '',redirectTo: '/',pathMatch: 'full'},
  //  {path: 'tarefas',redirectTo: '/tarefas/listar'},
  //  { path: 'funcionarios', redirectTo: 'funcionarios/listar' },
   // { path: '**', redirectTo: '/' }, //uma rota errada volta ao listar

  ...TarefaRoutes,
  ...FuncionarioRoutes,
  ...ClienteRoutes,
  ...ProdutoRoutes,
];

@NgModule({
  imports: [ RouterModule.forRoot(router)],//tratamento de rotas
  exports: [RouterModule]
})

//modulo de rotas
export class AppRoutingModule{}
