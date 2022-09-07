import { DefaultCrudRepository } from '@loopback/repository';
import { MemoryDataSource } from '../datasources';
import { Nurseryclass, NurseryclassRelations } from '../models';
export declare class NurseryclassRepository extends DefaultCrudRepository<Nurseryclass, typeof Nurseryclass.prototype.id, NurseryclassRelations> {
    constructor(dataSource: MemoryDataSource);
}
