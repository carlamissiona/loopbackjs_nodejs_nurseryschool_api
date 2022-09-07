import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Nurseryclass} from '../models';
import {NurseryclassRepository} from '../repositories';

export class NurseryClassController {
  constructor(
    @repository(NurseryclassRepository)
    public nurseryclassRepository : NurseryclassRepository,
  ) {}

  @post('/v1-nurseryclasses')
  @response(200, {
    description: 'Nurseryclass model instance',
    content: {'application/json': {schema: getModelSchemaRef(Nurseryclass)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nurseryclass, {
            title: 'NewNurseryclass',
            exclude: ['id'],
          }),
        },
      },
    })
    nurseryclass: Omit<Nurseryclass, 'id'>,
  ): Promise<Nurseryclass> {
    return this.nurseryclassRepository.create(nurseryclass);
  }

  @get('/v1-nurseryclasses/count')
  @response(200, {
    description: 'Nurseryclass model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Nurseryclass) where?: Where<Nurseryclass>,
  ): Promise<Count> {
    return this.nurseryclassRepository.count(where);
  }

  @get('/v1-nurseryclasses')
  @response(200, {
    description: 'Array of Nurseryclass model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Nurseryclass, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Nurseryclass) filter?: Filter<Nurseryclass>,
  ): Promise<Nurseryclass[]> {
    return this.nurseryclassRepository.find(filter);
  }

  @patch('/v1-nurseryclasses')
  @response(200, {
    description: 'Nurseryclass PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nurseryclass, {partial: true}),
        },
      },
    })
    nurseryclass: Nurseryclass,
    @param.where(Nurseryclass) where?: Where<Nurseryclass>,
  ): Promise<Count> {
    return this.nurseryclassRepository.updateAll(nurseryclass, where);
  }

  @get('/v1-nurseryclasses/{id}')
  @response(200, {
    description: 'Nurseryclass model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Nurseryclass, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Nurseryclass, {exclude: 'where'}) filter?: FilterExcludingWhere<Nurseryclass>
  ): Promise<Nurseryclass> {
    return this.nurseryclassRepository.findById(id, filter);
  }

  @patch('/v1-nurseryclasses/{id}')
  @response(204, {
    description: 'Nurseryclass PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nurseryclass, {partial: true}),
        },
      },
    })
    nurseryclass: Nurseryclass,
  ): Promise<void> {
    await this.nurseryclassRepository.updateById(id, nurseryclass);
  }

  @put('/v1-nurseryclasses/{id}')
  @response(204, {
    description: 'Nurseryclass PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nurseryclass: Nurseryclass,
  ): Promise<void> {
    await this.nurseryclassRepository.replaceById(id, nurseryclass);
  }

  @del('/v1-nurseryclasses/{id}')
  @response(204, {
    description: 'Nurseryclass DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nurseryclassRepository.deleteById(id);
  }
}
