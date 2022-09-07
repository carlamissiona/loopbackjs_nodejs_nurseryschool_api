import { DefaultCrudRepository } from '@loopback/repository';
import { MemoryDataSource } from '../datasources';
import { Foodprovider, FoodproviderRelations } from '../models';
export declare class FoodproviderRepository extends DefaultCrudRepository<Foodprovider, typeof Foodprovider.prototype.id, FoodproviderRelations> {
    constructor(dataSource: MemoryDataSource);
}
