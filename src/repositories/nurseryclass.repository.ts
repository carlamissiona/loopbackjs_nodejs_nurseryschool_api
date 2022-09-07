import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Nurseryclass, NurseryclassRelations} from '../models';

export class NurseryclassRepository extends DefaultCrudRepository<
  Nurseryclass,
  typeof Nurseryclass.prototype.id,
  NurseryclassRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Nurseryclass, dataSource);
  }
}
