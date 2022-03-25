import { ITodoReducer } from "../store/todo.reducer";
import { IUserReducer } from "../store/user";
export default interface AppState {
    todo: ITodoReducer,
    user: IUserReducer
}