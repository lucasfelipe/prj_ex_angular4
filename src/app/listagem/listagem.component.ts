import { Component, ElementRef } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoComponent } from '../produto/produto.component';
import { Router } from '@angular/router';



@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    produtos: ProdutoComponent[] = [];
    private service: ProdutoService;
    private router: Router;

    constructor(service: ProdutoService, router: Router) {
        this.service = service;
        this.service
            .lista()
            .subscribe(produtos => {
                this.produtos = produtos;
            },
            error => console.log(error));
        this.router = router;
    }

    excluir(produto: ProdutoComponent): void {
        // this.service.excluir(produto)
        //     .subscribe(
        //     res => $(element.nativeElement).fadeOut(),
        //     error => console.log(error));
    }

}