import { listItem } from './list-item';

export class List {
    name: string;
    completed: boolean;
    items: listItem[]

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }
}