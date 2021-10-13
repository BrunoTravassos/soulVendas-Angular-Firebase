import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable()
export class ClienteService {

  constructor(private firestore: AngularFirestore) { }


  listarTodos():Observable<any> {
    return this.firestore.collection('clientes', ref => ref.orderBy('dataCreate', 'asc')).snapshotChanges();
  }

  cadastrar(cliente: Cliente): Promise<any> {
    return this.firestore.collection('clientes').add(cliente);
  }

  remover(id: string): Promise<any> {
    return this.firestore.collection('clientes').doc(id).delete();
  }

  buscarPorId(id: string): Observable<any> {
    return this.firestore.collection('clientes').doc(id).snapshotChanges();
  }

  atualizar(id: string, data: any): Promise<any> {
    return this.firestore.collection('clientes').doc(id).update(data);
  }

}
