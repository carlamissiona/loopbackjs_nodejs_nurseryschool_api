"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foodprovider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Foodprovider = class Foodprovider extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Foodprovider.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Foodprovider.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Foodprovider.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Foodprovider.prototype, "date_created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Foodprovider.prototype, "date_changed", void 0);
Foodprovider = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Foodprovider);
exports.Foodprovider = Foodprovider;
//# sourceMappingURL=foodprovider.model.js.map