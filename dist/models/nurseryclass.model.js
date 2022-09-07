"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nurseryclass = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Nurseryclass = class Nurseryclass extends repository_1.Entity {
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
], Nurseryclass.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Nurseryclass.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Nurseryclass.prototype, "date_changed", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Nurseryclass.prototype, "date_created", void 0);
Nurseryclass = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Nurseryclass);
exports.Nurseryclass = Nurseryclass;
//# sourceMappingURL=nurseryclass.model.js.map