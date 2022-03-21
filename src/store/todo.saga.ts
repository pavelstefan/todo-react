import { takeEvery, put, select } from 'redux-saga/effects';
import { TODO_TYPES, setItems } from './todo.actions';
import { itemSelector } from './todo.selectors';
import { TODO_STATUS } from '../types/Todo';
import Action from '../types/redux-action';
import ITodo from '../types/Todo';

const url = 'http://localhost:8080';

function* handleLoadItems() {
    try {
        const items: ITodo[] = yield fetch(`${url}/todo`).then(res => res.json());
        yield put(setItems(items));
    } catch (e) {
        console.log(e);
    }
}

function* handleAddItem(action: Action<string>) {
    try {
        const description = action.payload;
        yield fetch(`${url}/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description,
                status: TODO_STATUS.CREATED
            })
        });
        yield handleLoadItems();
    } catch (e) {
        console.log(e);
    }
}

function* handleUpdate(action: Action<string>) {
    try {

        const id = action.payload;
        if (!id) {
            throw new Error('invalid id');
        }
        const item: ITodo = yield select(itemSelector(id));

        let status: TODO_STATUS | null = null;

        switch (item.status) {
            case TODO_STATUS.CREATED: {
                status = TODO_STATUS.STARTED;
                break;
            }
            case TODO_STATUS.STARTED: {
                status = TODO_STATUS.FINISHED;
                break;
            }
            case TODO_STATUS.FINISHED: {
                status = TODO_STATUS.CREATED;
                break;
            }
            default: {
                console.log(`Wrong status ${item.status}`);
            }
        }

        if (!status) {
            throw new Error('invalid status');
        }

        yield fetch(`${url}/todo/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status
            })
        });

        yield handleLoadItems();
    } catch (e) {
        console.log(e);
    }
}


export default function* todoSaga() {
    yield takeEvery(TODO_TYPES.ADD, handleAddItem);
    yield takeEvery(TODO_TYPES.GET, handleLoadItems);
    yield takeEvery(TODO_TYPES.UPDATE, handleUpdate);
}