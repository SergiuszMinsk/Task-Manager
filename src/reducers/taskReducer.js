import {
    TASK_CREATE,
    TASK_EDIT,
    TASKS_GET,
} from '../actions/types';

const INITIAL_STATE = {
    userValue: '',
    userEmail: '',
    userText: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_CREATE:
            return { ...state, userValue: true, userId: action.payload };
        default:
            return state;
    }
}