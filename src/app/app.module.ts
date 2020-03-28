import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';;
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produtos/servico/produto.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteManterComponent } from './clientes/cliente-manter/cliente-manter.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoManterComponent } from './produtos/produto-manter/produto-manter.component';
import { VendaComponent } from './venda/venda.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteManterComponent,
    ProdutosComponent,
    ProdutoManterComponent,
    VendaComponent,
    VendaManterComponent,
    LayoutComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
