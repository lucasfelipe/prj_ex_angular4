import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroProdutoComponent } from './cadastro_produto/cadastro.produto.component';

const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro_produto', component: CadastroProdutoComponent },
    { path: 'editar_produto/:id', component: CadastroProdutoComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);