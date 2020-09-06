import { Assignment } from './assignment.model';

export class Student {
    id:number;
    name: {
        first:string;
        last:string;
    }
    email:string;
    thumbnail:string;
    phone_number:string;
    address:string;
    assignments:Assignment[];
}
