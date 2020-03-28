import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../servico/venda';
import { VendaService } from '../servico/venda.service';
import { VendaProduto } from '../servico/vendaproduto';
import { Cliente } from 'src/app/clientes/servico/cliente';
import { ProdutoService } from 'src/app/produtos/servico/produto.service';
import { Produto } from 'src/app/produtos/servico/produto';
import { ClienteService } from 'src/app/clientes/servico/cliente.service';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {
  operacao: string = 'Incluir';

  venda: Venda = new Venda();

  vendaProduto: VendaProduto = new VendaProduto();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(    
    private router: Router,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void { 
    
    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    this.produtoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

  incluir(){
    this.vendaService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);        
      }
    );
  }
  
  adicionar(){

    this.venda.listaVendaProduto.push(this.vendaProduto);
    this.vendaProduto = new VendaProduto();

  }

  removerProduto(vendaProduto){

    this.venda.listaVendaProduto = this.venda.listaVendaProduto.filter(obj => obj !== vendaProduto);

  } 

}