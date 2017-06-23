import { Input } from '@angular/core';

export class ProdutoComponent {

    @Input() nome: string = '';
    @Input() preco: number;
    @Input() quantidade: number;
    private _id: number;

    public get id(): number {
        return this._id;
    }

}