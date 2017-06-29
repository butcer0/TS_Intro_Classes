import {GlobalEnums} from "../Interfaces/GlobalEnums"
import {ITodo} from "../Interfaces/ITodo"

export { Todo };

class Todo implements ITodo {
    state: GlobalEnums.TODOSTATE = GlobalEnums.TODOSTATE.NEW;
    constructor(public name: string, public id: number) {
        this.name = name;
        this.id = id;
    }
}

