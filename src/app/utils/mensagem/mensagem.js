"use strict";
var Mensagem = (function () {
    function Mensagem(_mensagem, _inclusao) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    Object.defineProperty(Mensagem.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mensagem.prototype, "inclusao", {
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return Mensagem;
}());
exports.Mensagem = Mensagem;
//# sourceMappingURL=mensagem.js.map