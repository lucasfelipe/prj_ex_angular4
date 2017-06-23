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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var mensagem_1 = require("../utils/mensagem/mensagem");
var ProdutoService = (function () {
    function ProdutoService(http, json) {
        this.url = 'http://localhost:8080/produtos/';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'application/json');
        this.json = json;
    }
    ProdutoService.prototype.lista = function () {
        // let params = new URLSearchParams();
        // params.set('callback', 'JSONP_CALLBACK');
        // return this.json.get(this.url, { search: params }).map(res => res.json());
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    ProdutoService.prototype.cadastrar = function (produto) {
        if (produto.id) {
            return this.http.put(this.url, JSON.stringify(produto), { headers: this.headers })
                .map(function () { return new mensagem_1.Mensagem('Produto editado com sucesso', false); });
        }
        else {
            return this.http.post(this.url, JSON.stringify(produto), { headers: this.headers })
                .map(function () { return new mensagem_1.Mensagem('Cadastro realizado com sucesso', true); });
        }
    };
    ProdutoService.prototype.buscaPorId = function (id) {
        return this.http.get(this.url + id).map(function (res) { return res.json(); });
    };
    ProdutoService.prototype.excluir = function (produto) {
        return this.http.delete(this.url + produto.id)
            .map(function (res) { return new mensagem_1.Mensagem('Produto excluído com sucesso', true); });
    };
    return ProdutoService;
}());
ProdutoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map