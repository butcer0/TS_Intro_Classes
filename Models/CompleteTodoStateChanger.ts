import {TodoStateChanger} from "./TodoStateChanger"
import {GlobalEnums} from "../Interfaces/GlobalEnums"
import {ITodo} from "../Interfaces/ITodo"

export {CompleteTodoStateChanger}

class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(GlobalEnums.TODOSTATE.COMPLETE);
    }

    canChangeState(todo: ITodo): boolean {
        return !!todo 
        && (todo.state == GlobalEnums.TODOSTATE.ACTIVE
        || todo.state == GlobalEnums.TODOSTATE.DELETED 
        )
    }
}