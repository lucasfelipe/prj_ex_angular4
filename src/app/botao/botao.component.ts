import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = '';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() habilitado: boolean = false;
    @Output() acao = new EventEmitter();

    executaAcao() {
        this.acao.emit(null);
    }
}