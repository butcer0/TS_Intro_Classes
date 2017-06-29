import {ITodo} from "../Interfaces/ITodo"
import {ITodoService, IIdGenerator} from "../Interfaces/ITodoService"
export { TodoService }

class TodoService implements ITodoService, IIdGenerator {
    private static _lastId: number = 0;

    get nextId() {
        return TodoService.getNextId();
    }

    set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }

    constructor(private todos: ITodo[]) {
    }

    add(todo: ITodo): ITodo {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    }

    getAll(): ITodo[] {
        var clone = JSON.stringify(this.todos);
        return JSON.parse(clone);
    }

    static getNextId():number {
        return TodoService._lastId += 1;
    }

    delete(todoId: number): void {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex, 1);
    }
    getById(todoId: number): ITodo {
        var filtered = this.todos.filter(x => x.id == todoId);
        if(filtered.length)
        {
            return filtered[0];
        }

        return null;
    }

}