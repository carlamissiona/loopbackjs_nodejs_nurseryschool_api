import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Nurseryclass } from '../models';
import { NurseryclassRepository } from '../repositories';
export declare class NurseryClassController {
    nurseryclassRepository: NurseryclassRepository;
    constructor(nurseryclassRepository: NurseryclassRepository);
    create(nurseryclass: Omit<Nurseryclass, 'id'>): Promise<Nurseryclass>;
    count(where?: Where<Nurseryclass>): Promise<Count>;
    find(filter?: Filter<Nurseryclass>): Promise<Nurseryclass[]>;
    updateAll(nurseryclass: Nurseryclass, where?: Where<Nurseryclass>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Nurseryclass>): Promise<Nurseryclass>;
    updateById(id: number, nurseryclass: Nurseryclass): Promise<void>;
    replaceById(id: number, nurseryclass: Nurseryclass): Promise<void>;
    deleteById(id: number): Promise<void>;
}
