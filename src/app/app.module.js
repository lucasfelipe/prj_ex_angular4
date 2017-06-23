"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var produto_module_1 = require("./produto/produto.module");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var botao_module_1 = require("./botao/botao.module");
var forms_1 = require("@angular/forms");
var modal_module_1 = require("./modal/modal.module");
var app_component_1 = require("./app.component");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_produto_component_1 = require("./cadastro_produto/cadastro.produto.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            produto_module_1.ProdutoModule,
            http_1.HttpModule,
            app_routes_1.routing,
            http_1.JsonpModule,
            botao_module_1.BotaoModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            modal_module_1.ModalModule
        ],
        declarations: [app_component_1.AppComponent, listagem_component_1.ListagemComponent, cadastro_produto_component_1.CadastroProdutoComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map