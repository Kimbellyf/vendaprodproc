import { Component, OnInit } from '@angular/core';
import { Venda } from './servico/venda';
import { Cliente } from '../clientes/servico/cliente';
import { Produto } from '../produtos/servico/produto';
import { VendaService } from './servico/venda.service';
import { ClienteService } from '../clientes/servico/cliente.service';
import { Router } from '@angular/router';
//import {Venda} from 

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

 
  venda: Venda = new Venda();
  selecionado: Venda;
  listaVenda: Venda[] = [];
  

  listaCliente: Cliente[] = [];
  
  constructor(
    private router: Router,
    private vendaService: VendaService,
    private clienteService: ClienteService

  ) { }

  ngOnInit(): void {

    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );
  }

  pesquisar(){
    
    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/venda/incluir']);
  }

  alterar(){    
    this.router.navigate(['/venda/alterar/'+this.selecionado.cliente.codigo]);
  }

  remover(){

    this.vendaService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}