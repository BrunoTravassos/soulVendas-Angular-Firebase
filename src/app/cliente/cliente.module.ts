import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FuncionarioService, FuncionarioConcluidaDirective } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarClienteComponent } from './criar/criar.component';
import { ListarClienteComponent } from './listar';
import { ClienteService } from './shared';



@NgModule({
  declarations: [ //importar componentes
    ListarClienteComponent,
    CadastrarClienteComponent,

  ],
  imports: [ //importar modulos
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ //importar serviços
    ClienteService
  ]
})
export class ClientesModule { }
