"use strict";
function isNumber() {
    return function (control) {
        var value = control.value;
        return isNaN(value) ? { 'number': { value: value } } : null;
    };
}
exports.isNumber = isNumber;
//# sourceMappingURL=number.validator.js.map