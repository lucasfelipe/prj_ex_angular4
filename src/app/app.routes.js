"use strict";
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_produto_component_1 = require("./cadastro_produto/cadastro.produto.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro_produto', component: cadastro_produto_component_1.CadastroProdutoComponent },
    { path: 'editar_produto/:id', component: cadastro_produto_component_1.CadastroProdutoComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map