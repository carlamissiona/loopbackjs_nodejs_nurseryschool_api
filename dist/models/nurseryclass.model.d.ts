import { Entity } from '@loopback/repository';
export declare class Nurseryclass extends Entity {
    id?: number;
    name: string;
    date_changed: string;
    date_created: string;
    constructor(data?: Partial<Nurseryclass>);
}
export interface NurseryclassRelations {
}
export declare type NurseryclassWithRelations = Nurseryclass & NurseryclassRelations;
