import { Routes } from "@angular/router";
import { EditarTarefaComponent } from "./editar";
import { CadastrarTarefaComponent } from "./cadastrar";
import { ListarTarefaComponent } from "./listar";


export const TarefaRoutes: Routes = [
//rotas
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];
