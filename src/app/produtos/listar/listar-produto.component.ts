import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProdutoService, Produto } from '../shared';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: any[] = [] // vai p/ o html

  constructor(private _produtoService: ProdutoService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this._produtoService.listarTodos().subscribe(data => {
      this.produtos = [];
      data.forEach((element: any) => {
        this.produtos.push({
        id:element.payload.doc.id,
         ...element.payload.doc.data(),
        })
      });
    });
  }
  remover(id:string) {
    this._produtoService.remover(id).then(() => {
      console.log('Produto removido com sucesso');
      this.toastr.error('Produto removido com sucesso', 'Produto removido!', {
        positionClass: 'toast-top-center'
      })
    }).catch(error => {
      console.log(error);
    })
  }
}
