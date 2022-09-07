import {Entity, model, property} from '@loopback/repository';

@model()
export class Nurseryclass extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  date_changed: string;

  @property({
    type: 'date',
    required: true,
  })
  date_created: string;


  constructor(data?: Partial<Nurseryclass>) {
    super(data);
  }
}

export interface NurseryclassRelations {
  // describe navigational properties here
}

export type NurseryclassWithRelations = Nurseryclass & NurseryclassRelations;
