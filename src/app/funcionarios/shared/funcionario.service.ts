import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';

@Injectable()
export class FuncionarioService {

  constructor(private firestore: AngularFirestore) { }

  /* listarTodos(): Funcionario[]{
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios) : [];
  } */
  listarTodos():Observable<any> {
    return this.firestore.collection('funcionarios', ref => ref.orderBy('dataCreate', 'asc')).snapshotChanges();
  }

  /* cadastrar(funcionario:Funcionario): void{
    const funcionarios = this.listarTodos();
    funcionario.id = new Date().getTime();
    funcionarios.push(funcionario);
    localStorage['funcionarios'] = JSON.stringify(funcionarios)
  } */

  cadastrar(funcionario: Funcionario): Promise<any> {
    return this.firestore.collection('funcionarios').add(funcionario);
  }

  remover(id: string): Promise<any> {
    return this.firestore.collection('funcionarios').doc(id).delete();
  }

  buscarPorId(id: string): Observable<any> {
    return this.firestore.collection('funcionarios').doc(id).snapshotChanges();
  }

  atualizar(id: string, data: any): Promise<any> {
    return this.firestore.collection('funcionarios').doc(id).update(data);
  }



 /*  buscarPorId(id: number): Funcionario{
    const funcionarios: Funcionario[] = this.listarTodos();

    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizar(funcionario: Funcionario): void{
    const funcionarios: Funcionario[] = this.listarTodos();
    funcionarios.forEach((obj, index, objs) => {
      if (funcionario.id === obj.id) {
        objs[index] = funcionario;
      }
    });
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  remover(id: number): void{
    let funcionarios: Funcionario[] = this.listarTodos();
    funcionarios = funcionarios.filter(funcionarios => funcionarios.id !== id);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  alterarStatus(id: number): void{
    const funcionarios: Funcionario[] = this.listarTodos();
    funcionarios.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });

    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  } */
}
