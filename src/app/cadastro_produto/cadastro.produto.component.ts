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
    mensagem: string = '';

    cadastroForm: FormGroup;
    private router: Router;
    private service: ProdutoService;
    private route: ActivatedRoute;


    constructor(service: ProdutoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;

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

        this.route = route;
        this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.service.buscaPorId(id).subscribe(
                    produto => this.produto = produto,
                    error => console.log(error));
            }
        });
        
        this.router = router;
    }

    cadastrar(event: any) {
        event.preventDefault();
        this.service.cadastrar(this.produto)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.produto = new ProdutoComponent();
                if (!res.inclusao) this.router.navigate(['']);
            });
    }

}