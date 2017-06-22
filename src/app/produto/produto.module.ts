import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './produto.service';

@NgModule({
    imports: [CommonModule],
    providers: [ProdutoService]
})
export class ProdutoModule { }