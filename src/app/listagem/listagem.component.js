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
var produto_service_1 = require("../produto/produto.service");
var router_1 = require("@angular/router");
var ListagemComponent = (function () {
    function ListagemComponent(service, router) {
        var _this = this;
        this.produtos = [];
        this.service = service;
        this.service
            .lista()
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        }, function (error) { return console.log(error); });
        this.router = router;
    }
    ListagemComponent.prototype.excluir = function (produto) {
        // this.service.excluir(produto)
        //     .subscribe(
        //     res => $(element.nativeElement).fadeOut(),
        //     error => console.log(error));
    };
    return ListagemComponent;
}());
ListagemComponent = __decorate([
    core_1.Component({
        selector: 'listagem',
        templateUrl: './listagem.component.html'
    }),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService, router_1.Router])
], ListagemComponent);
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map