export enum TODO_STATUS {
    CREATED = 'created',
    STARTED = 'started',
    FINISHED = 'finished',
}

export default interface ITodo {
    description: string;
    status: TODO_STATUS;
    id: string;
}