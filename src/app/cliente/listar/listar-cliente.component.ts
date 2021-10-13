import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClienteService, Cliente } from '../shared';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: any[] = [] // vai p/ o html

  constructor(private _clienteService: ClienteService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.listarTodos();

  }

  listarTodos(){
    this._clienteService.listarTodos().subscribe(data => {
      this.clientes = [];
      data.forEach((element: any) => {
        this.clientes.push({
        id:element.payload.doc.id,
         ...element.payload.doc.data(),
        })
      });
    });
  }
  remover(id:string) {
    this._clienteService.remover(id).then(() => {
      console.log('Cliente removido com sucesso');
      this.toastr.error('Cliente removido com sucesso', 'Cliente removido!', {
        positionClass: 'toast-top-center'
      })
    }).catch(error => {
      console.log(error);
    })
  }
}
