import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

    @Input() title: string = 'Tem certeza?';
    @Input() private description: string;
    @Output() action = new EventEmitter();

    constructor(private _element: ElementRef) {
        this._element = _element;
    }

    ngAfterViewInit() {
        $(this._element.nativeElement).dialog({
            title: this.title,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: () => {
                    $(this._element.nativeElement).dialog("close");
                },
                Confirmar: () => {
                    $(this._element.nativeElement).dialog("close");
                    this.action.emit();
                }
            }
        });
    }

    show() {
        $(this._element.nativeElement).dialog('open');
    }

}