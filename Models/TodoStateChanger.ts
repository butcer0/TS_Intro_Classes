import {ITodo} from "../Interfaces/ITodo"
import {GlobalEnums} from "../Interfaces/GlobalEnums"
//Erik - 6/29/2017 Could do: import * as GlobalEnums from "../Interfaces/GlobalEnums.ts"

export { TodoStateChanger };

abstract class TodoStateChanger {
    constructor(protected newState: GlobalEnums.TODOSTATE) {
    }

    abstract canChangeState(todo: ITodo): boolean;

    changeState(todo: ITodo): ITodo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }

}

