import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '..';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  createCliente: FormGroup;
  adicionar = false;
  loading = false;
  id: string | null;
  titulo = 'Inserir Cliente'

  constructor(private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.createCliente = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.atualizar();
  }

  adicionarEditCliente() {
    this.adicionar = true;

    if (this.createCliente.invalid) {
      return;
    }
    if (this.id === null) {
      this.adicionarCliente();
    } else {
      this.editarCliente(this.id);
    }

  }
  editarCliente(id:string) {
    const cliente: any = {
      nome: this.createCliente.value.nome,
      cpf: this.createCliente.value.cpf,
      email: this.createCliente.value.email,
      telefone: this.createCliente.value.telefone,
      dataUpdate: new Date()
    }
    this.loading = true;
    this._clienteService.atualizar(this.id, cliente).then(() => {
      this.loading = false;
      this.toastr.info("Cliente atualizado com sucesso!", "Cliente Atualizado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/clientes/listar'])
    })
  }

  adicionarCliente() {
    const cliente: any = {
      nome: this.createCliente.value.nome,
      cpf: this.createCliente.value.cpf,
      email: this.createCliente.value.email,
      telefone: this.createCliente.value.telefone,
      dataCreate: new Date(),
      dataUpdate: new Date()
    }
    this.loading = true;
    this._clienteService.cadastrar(cliente).then((result) => {
      this.toastr.success("Cliente cadastrado com sucesso!", "Cliente Cadastrado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/clientes/listar'])
    }).catch((err) => {
      console.log(err)
      this.loading = false
    });
  }

  atualizar(): void {
    this.titulo = 'Editar Cliente'
    if (this.id !== null) {
      this.loading = true;
      this._clienteService.buscarPorId(this.id).subscribe(data => {
        this.loading = false;
        // console.log(data.payload.data()['salario']);
        this.createCliente.setValue({
          nome: data.payload.data()['nome'],
          cpf: data.payload.data()['cpf'],
          email: data.payload.data()['email'],
          telefone: data.payload.data()['telefone']
        })
      })
    }
  }
}
