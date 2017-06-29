import {ITodo} from "./ITodo"

export {ITodoService}
export {IIdGenerator}
interface ITodoService {
    add(todo: ITodo): ITodo;
    delete(todoId: number): void;
    getAll(): ITodo[];
    getById(todoId: number): ITodo;
}

interface IIdGenerator {
    nextId: number;
}
