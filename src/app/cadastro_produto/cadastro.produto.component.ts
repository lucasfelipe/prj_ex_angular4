import { Component } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNumber } from '../utils/validators/number.validator';

@Component({
    selector: 'cadastro-produto',
    templateUrl: './cadastro.produto.component.html'
})
export class CadastroProdutoComponent {

    produto: ProdutoComponent = new ProdutoComponent();
    
    cadastroForm: FormGroup;
    private router: Router;
    private service: ProdutoService;
    private route: ActivatedRoute;

    constructor(service: ProdutoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.cadastroForm = fb.group({
            nome: ['', Validators.compose([
                            Validators.required,
                            Validators.minLength(4)
                        ])
                    ],
            preco: ['', Validators.compose([
                Validators.required,
                isNumber()
            ])],
            quantidade: ['', Validators.compose([
                Validators.required,
                isNumber()
            ])]
        });
        this.router = router;
    }

    cadastrar(event: any) {
        event.preventDefault();
        console.log(this.produto);
        //TODO: implementar envio do produto para o WebService e redirecionar a pagina para a lista de produtos
    }

}