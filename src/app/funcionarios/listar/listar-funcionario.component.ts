import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FuncionarioService, Funcionario } from '../shared';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: any[] = [] // vai p/ o html


  constructor(private _funcionarioService: FuncionarioService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.listarTodos();
    // this.funcionarios = this.listarTodos();
    /* this.tarefas = [
      new Tarefa(1,'Tarefa 01', false),
      new Tarefa(2,'Tarefa 02', false)
    ] */
  }

  listarTodos(){
     this._funcionarioService.listarTodos().subscribe(data => {
      this.funcionarios = [];
      data.forEach((element: any) => {
      this.funcionarios.push({
        id:element.payload.doc.id,
         ...element.payload.doc.data(),
        })
      });
    });
  }
  remover(id:string) {
    this._funcionarioService.remover(id).then(() => {
      console.log('Funcionario removido com sucesso');
      this.toastr.error('Funcionario removido com sucesso', 'Funcionario removido!', {
        positionClass: 'toast-top-center'
      })
    }).catch(error => {
      console.log(error);
    })
  }

  /* alterarStatus(funcionario: Funcionario): void{
    if (confirm('Deseja alterar o status da funcionario "' + funcionario.nome+ '"?')) {
      this.funcionarioService.alterarStatus(funcionario.id);
      this.funcionarios = this.listarTodos();
    } else {
      this.funcionarios = this.listarTodos();
    }
  }

  remover($event: any, funcionario: Funcionario):void {
    $event.preventDefault();
    if (confirm('Deseja removar a funcionario "' + funcionario.nome + '"?')) {
      this.funcionarioService.remover(funcionario.id);
      this.funcionarios = this.listarTodos();
    } else {
      this.funcionarios = this.listarTodos();
    }
  }
 */
}
