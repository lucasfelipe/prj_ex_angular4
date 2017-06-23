import { Http, Headers, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoComponent } from './produto.component';
import { Mensagem } from '../utils/mensagem/mensagem';

@Injectable()
export class ProdutoService {

    private http: Http;
    private headers: Headers;
    private url: string = 'http://localhost:8080/produtos/';
    private json: Jsonp;

    constructor(http: Http, json: Jsonp) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
        this.json = json;
    }

    lista(): Observable<ProdutoComponent[]> {
        // let params = new URLSearchParams();
        // params.set('callback', 'JSONP_CALLBACK');
        // return this.json.get(this.url, { search: params }).map(res => res.json());
        return this.http.get(this.url).map(res => res.json());
    }

    cadastrar(produto: ProdutoComponent): Observable<Mensagem> {
        if (produto.id) {
            return this.http.put(this.url, JSON.stringify(produto), { headers: this.headers })
                .map(() => new Mensagem('Produto editado com sucesso', false));
        } else {
            return this.http.post(this.url, JSON.stringify(produto), { headers: this.headers })
                .map(() => new Mensagem('Cadastro realizado com sucesso', true));
        }
    }

    buscaPorId(id: string): Observable<ProdutoComponent> {
        return this.http.get(this.url + id).map(res => res.json());
    }

    excluir(produto: ProdutoComponent): Observable<Mensagem> {
        return this.http.delete(this.url + produto.id)
            .map(res => new Mensagem('Produto excluído com sucesso', true));
    }

}