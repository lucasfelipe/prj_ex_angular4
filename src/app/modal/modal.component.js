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
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent(_element) {
        this._element = _element;
        this.title = 'Tem certeza?';
        this.action = new core_1.EventEmitter();
        this._element = _element;
    }
    ModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this._element.nativeElement).dialog({
            title: this.title,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: function () {
                    $(_this._element.nativeElement).dialog("close");
                },
                Confirmar: function () {
                    $(_this._element.nativeElement).dialog("close");
                    _this.action.emit();
                }
            }
        });
    };
    ModalComponent.prototype.show = function () {
        $(this._element.nativeElement).dialog('open');
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "description", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "action", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map