"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalEnums_1 = require("../Interfaces/GlobalEnums");
class Todo {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.state = GlobalEnums_1.GlobalEnums.TODOSTATE.NEW;
        this.name = name;
        this.id = id;
    }
}
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map