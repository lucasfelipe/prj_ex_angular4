import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @Input() title: string = 'Tem certeza?';
    @Input() description: string = 'Modal description';
    @Output() action = new EventEmitter();

    constructor(private _element: ElementRef) {
        this._element = _element;
    }

    prosseguir(event: any): void {
        event.preventDefault();
        this.action.emit(null);
    }

    open() {
    }

}