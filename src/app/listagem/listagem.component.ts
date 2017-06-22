import { Component } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoComponent } from '../produto/produto.component';


@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    produtos: ProdutoComponent[] = [];
    service: ProdutoService;

    constructor(service: ProdutoService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(produtos => {
                this.produtos = produtos;
            },
            error => console.log(error));
    }

}