import { Component, OnInit } from '@angular/core';
import { Produto } from './servico/produto';
import { ProdutoService } from './servico/produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {


  produto: Produto = new Produto();
  selecionado: Produto;

  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoServico: ProdutoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){

    this.produtoServico.consultar(this.produto.nome).subscribe(
      (retorno: Produto[]) => {
        this.listaProduto = retorno;
        
      }

    );

  }

  incluir(){
    this.router.navigate(['/produto/incluir']);
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

  remover(){

    this.produtoServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
    
  }

  alterar(){    
    this.router.navigate(['/produto/alterar/'+this.selecionado.nome]);
  }

}




