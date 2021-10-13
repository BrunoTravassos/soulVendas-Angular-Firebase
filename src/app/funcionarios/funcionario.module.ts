import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FuncionarioService, FuncionarioConcluidaDirective } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarFuncionarioComponent } from './criar/criar.component';
import { ListarFuncionarioComponent } from './listar';
import { FuncionarioService } from './shared';



@NgModule({
  declarations: [ //importar componentes
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,

  ],
  imports: [ //importar modulos
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ //importar serviços
    FuncionarioService
  ]
})
export class FuncionariosModule { }
