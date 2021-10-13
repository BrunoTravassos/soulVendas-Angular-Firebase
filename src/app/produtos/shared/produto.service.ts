import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {

  constructor(private firestore: AngularFirestore) { }


  listarTodos():Observable<any> {
    return this.firestore.collection('produtos', ref => ref.orderBy('dataCreate', 'asc')).snapshotChanges();
  }


  cadastrar(produto: Produto): Promise<any> {
    return this.firestore.collection('produtos').add(produto);
  }

  remover(id: string): Promise<any> {
    return this.firestore.collection('produtos').doc(id).delete();
  }

  buscarPorId(id: string): Observable<any> {
    return this.firestore.collection('produtos').doc(id).snapshotChanges();
  }

  atualizar(id: string, data: any): Promise<any> {
    return this.firestore.collection('produtos').doc(id).update(data);
  }
}
