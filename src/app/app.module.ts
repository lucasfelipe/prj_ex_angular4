import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoModule } from './produto/produto.module';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { BotaoModule } from './botao/botao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroProdutoComponent } from './cadastro_produto/cadastro.produto.component';

import { routing } from './app.routes';
 
@NgModule({
  imports:      [ 
    BrowserModule,
    ProdutoModule,
    HttpModule,
    routing,
    JsonpModule,
    BotaoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, ListagemComponent, CadastroProdutoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
