import {GlobalEnums} from "./GlobalEnums"

export {ITodo}
interface ITodo {
    id: number;
    name: string;
    state: GlobalEnums.TODOSTATE;
}