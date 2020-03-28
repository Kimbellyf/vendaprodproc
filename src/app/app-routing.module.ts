import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoManterComponent } from './produtos/produto-manter/produto-manter.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteManterComponent } from './clientes/cliente-manter/cliente-manter.component';
import { VendaComponent } from './venda/venda.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';


const routes: Routes = [
  {
    path: '',    
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',    
    component: ProdutosComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',
    component: ProdutoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:id', 
    component: ProdutoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente', 
    component: ClientesComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir', 
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:id', 
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda', 
    component: VendaComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/incluir', 
    component: VendaManterComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }