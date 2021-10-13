import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from '..';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  createProduto: FormGroup;
  adicionar = false;
  loading = false;
  id: string | null;
  titulo = 'Inserir Produto'

  constructor(private fb: FormBuilder,
    private _produtoService: ProdutoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.createProduto = this.fb.group({
      nome: ['', Validators.required],
      codBarras: ['', Validators.required],
      quantidade: ['', Validators.required],
      preco: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.atualizar();
  }

  adicionarEditProduto() {
    this.adicionar = true;

    if (this.createProduto.invalid) {
      return;
    }
    if (this.id === null) {
      this.adicionarProduto();
    } else {
      this.editarProduto(this.id);
    }

  }
  editarProduto(id:string) {
    const produto: any = {
      nome: this.createProduto.value.nome,
      codBarras: this.createProduto.value.codBarras,
      quantidade: this.createProduto.value.quantidade,
      preco: this.createProduto.value.preco,
      dataUpdate: new Date()
    }
    this.loading = true;
    this._produtoService.atualizar(this.id, produto).then(() => {
      this.loading = false;
      this.toastr.info("Produto atualizado com sucesso!", "Produto Atualizado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/produtos/listar'])
    })
  }

  adicionarProduto() {
    const produto: any = {
      nome: this.createProduto.value.nome,
      codBarras: this.createProduto.value.codBarras,
      quantidade: this.createProduto.value.quantidade,
      preco: this.createProduto.value.preco,
      dataCreate: new Date(),
      dataUpdate: new Date()
    }
    this.loading = true;
    this._produtoService.cadastrar(produto).then((result) => {
      this.toastr.success("Produto cadastrado com sucesso!", "Produto Cadastrado!", {
        positionClass: "toast-top-center"
      })
      this.loading = false;
      this.router.navigate(['/produtos/listar'])
    }).catch((err) => {
      console.log(err)
      this.loading = false
    });
  }

  atualizar(): void {
    this.titulo = 'Editar Produto'
    if (this.id !== null) {
      this.loading = true;
      this._produtoService.buscarPorId(this.id).subscribe(data => {
        this.loading = false;
        // console.log(data.payload.data()['salario']);
        this.createProduto.setValue({
          nome: data.payload.data()['nome'],
          codBarras: data.payload.data()['codBarras'],
          quantidade: data.payload.data()['quantidade'],
          preco: data.payload.data()['preco']
        })
      })
    }
  }
}
