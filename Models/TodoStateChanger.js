"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
exports.TodoStateChanger = TodoStateChanger;
//# sourceMappingURL=TodoStateChanger.js.map