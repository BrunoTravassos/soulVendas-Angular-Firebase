import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FuncionarioService } from '..';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  createFunc: FormGroup;
  adicionar = false;
  loading = false;
  id: string | null;
  titulo = 'Inserir Funcionario'

  constructor(private fb: FormBuilder,
    private _funcionarioService: FuncionarioService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.createFunc = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      salario: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.atualizar();
  }

  adicionarEditFuncionario() {
    this.adicionar = true;

    if (this.createFunc.invalid) {
      return;
    }
    if (this.id === null) {
      this.adicionarFuncionario();
    } else {
      this.editarFuncionario(this.id);
    }

  }
  editarFuncionario(id:string) {
    const funcionario: any = {
      nome: this.createFunc.value.nome,
      cpf: this.createFunc.value.cpf,
      email: this.createFunc.value.email,
      salario: this.createFunc.value.salario,
      dataUpdate: new Date()
    }
    this.loading = true;
    this._funcionarioService.atualizar(this.id, funcionario).then(() => {
      this.loading = false;
      this.toastr.info("Funcionario atualizado com sucesso!", "Funcionario Atualizado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/funcionarios/listar'])
    })
  }

  adicionarFuncionario() {
    const funcionario: any = {
      nome: this.createFunc.value.nome,
      cpf: this.createFunc.value.cpf,
      email: this.createFunc.value.email,
      salario: this.createFunc.value.salario,
      dataCreate: new Date(),
      dataUpdate: new Date()
    }
    this.loading = true;
    this._funcionarioService.cadastrar(funcionario).then((result) => {
      this.toastr.success("Funcionario cadastrado com sucesso!", "Funcionario Cadastrado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/funcionarios/listar'])
    }).catch((err) => {
      console.log(err)
      this.loading = false
    });

  }

  atualizar(): void {
    this.titulo = 'Editar Funcionario'
    if (this.id !== null) {
      this.loading = true;
      this._funcionarioService.buscarPorId(this.id).subscribe(data => {
        this.loading = false;
        console.log(data.payload.data()['salario']);
        this.createFunc.setValue({
          nome: data.payload.data()['nome'],
          cpf: data.payload.data()['cpf'],
          email: data.payload.data()['email'],
          salario: data.payload.data()['salario']
        })
      })
    }
  }

}
