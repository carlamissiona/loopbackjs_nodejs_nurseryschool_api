import { Entity } from '@loopback/repository';
export declare class Foodprovider extends Entity {
    id?: number;
    name: string;
    description: string;
    date_created: string;
    date_changed: string;
    constructor(data?: Partial<Foodprovider>);
}
export interface FoodproviderRelations {
}
export declare type FoodproviderWithRelations = Foodprovider & FoodproviderRelations;
