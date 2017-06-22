import { Http, Headers, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoComponent } from './produto.component';

@Injectable()
export class ProdutoService {

    // private http: Http;
    // private headers: Headers;
    private url: string = 'http://localhost:8080/produtos/';

    // constructor(http: Http) {
    //     this.http = http;
    //     this.headers = new Headers();
    //     this.headers.append('Content-type', 'application/json');
    // }

    constructor(private json: Jsonp) {}

    lista(): Observable<ProdutoComponent[]> {
        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.json.get(this.url, {search: params}).map(res => res.json());
    }

}