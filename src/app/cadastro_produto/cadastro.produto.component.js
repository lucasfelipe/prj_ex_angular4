"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var produto_component_1 = require("../produto/produto.component");
var produto_service_1 = require("../produto/produto.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var number_validator_1 = require("../utils/validators/number.validator");
var CadastroProdutoComponent = (function () {
    function CadastroProdutoComponent(service, fb, route, router) {
        this.produto = new produto_component_1.ProdutoComponent();
        this.service = service;
        this.route = route;
        this.cadastroForm = fb.group({
            nome: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ])
            ],
            preco: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    number_validator_1.isNumber()
                ])],
            quantidade: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    number_validator_1.isNumber()
                ])]
        });
        this.router = router;
    }
    CadastroProdutoComponent.prototype.cadastrar = function (event) {
        event.preventDefault();
        console.log(this.produto);
        //TODO: implementar envio do produto para o WebService e redirecionar a pagina para a lista de produtos
    };
    return CadastroProdutoComponent;
}());
CadastroProdutoComponent = __decorate([
    core_1.Component({
        selector: 'cadastro-produto',
        templateUrl: './cadastro.produto.component.html'
    }),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], CadastroProdutoComponent);
exports.CadastroProdutoComponent = CadastroProdutoComponent;
//# sourceMappingURL=cadastro.produto.component.js.map