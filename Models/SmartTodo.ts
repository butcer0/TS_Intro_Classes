import {ISmartTodo} from "../Interfaces/ISmartTodo"

export {SmartTodo}

class SmartTodo implements ISmartTodo {
    constructor(public name: string) {
        this.name = name;
    }
}
