import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Foodprovider, FoodproviderRelations} from '../models';

export class FoodproviderRepository extends DefaultCrudRepository<
  Foodprovider,
  typeof Foodprovider.prototype.id,
  FoodproviderRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Foodprovider, dataSource);
  }
}
