"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NurseryClassController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NurseryClassController = class NurseryClassController {
    constructor(nurseryclassRepository) {
        this.nurseryclassRepository = nurseryclassRepository;
    }
    async create(nurseryclass) {
        return this.nurseryclassRepository.create(nurseryclass);
    }
    async count(where) {
        return this.nurseryclassRepository.count(where);
    }
    async find(filter) {
        return this.nurseryclassRepository.find(filter);
    }
    async updateAll(nurseryclass, where) {
        return this.nurseryclassRepository.updateAll(nurseryclass, where);
    }
    async findById(id, filter) {
        return this.nurseryclassRepository.findById(id, filter);
    }
    async updateById(id, nurseryclass) {
        await this.nurseryclassRepository.updateById(id, nurseryclass);
    }
    async replaceById(id, nurseryclass) {
        await this.nurseryclassRepository.replaceById(id, nurseryclass);
    }
    async deleteById(id) {
        await this.nurseryclassRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/v1-nurseryclasses'),
    (0, rest_1.response)(200, {
        description: 'Nurseryclass model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass, {
                    title: 'NewNurseryclass',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/v1-nurseryclasses/count'),
    (0, rest_1.response)(200, {
        description: 'Nurseryclass model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Nurseryclass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/v1-nurseryclasses'),
    (0, rest_1.response)(200, {
        description: 'Array of Nurseryclass model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Nurseryclass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/v1-nurseryclasses'),
    (0, rest_1.response)(200, {
        description: 'Nurseryclass PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Nurseryclass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Nurseryclass, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/v1-nurseryclasses/{id}'),
    (0, rest_1.response)(200, {
        description: 'Nurseryclass model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Nurseryclass, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/v1-nurseryclasses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Nurseryclass PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Nurseryclass, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Nurseryclass]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/v1-nurseryclasses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Nurseryclass PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Nurseryclass]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/v1-nurseryclasses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Nurseryclass DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], NurseryClassController.prototype, "deleteById", null);
NurseryClassController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.NurseryclassRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.NurseryclassRepository])
], NurseryClassController);
exports.NurseryClassController = NurseryClassController;
//# sourceMappingURL=nursery-class.controller.js.map