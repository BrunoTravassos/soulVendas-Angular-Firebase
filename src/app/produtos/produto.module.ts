import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FuncionarioService, FuncionarioConcluidaDirective } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarProdutoComponent } from './criar/criar.component';
import { ListarProdutoComponent } from './listar';
import { ProdutoService } from './shared';



@NgModule({
  declarations: [ //importar componentes
    ListarProdutoComponent,
    CadastrarProdutoComponent,

  ],
  imports: [ //importar modulos
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ //importar serviços
    ProdutoService
  ]
})
export class ProdutosModule { }
