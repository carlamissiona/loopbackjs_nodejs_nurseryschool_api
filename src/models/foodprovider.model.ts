import {Entity, model, property} from '@loopback/repository';

@model()
export class Foodprovider extends Entity {
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
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  date_created: string;

  @property({
    type: 'date',
    required: true,
  })
  date_changed: string;


  constructor(data?: Partial<Foodprovider>) {
    super(data);
  }
}

export interface FoodproviderRelations {
  // describe navigational properties here
}

export type FoodproviderWithRelations = Foodprovider & FoodproviderRelations;
