import _ from 'lodash'

import {
    EDIT_MODE,
    PAGE_CHANGE,
    TASK_CREATE,
    TASK_EDIT,
    TASKS_GET,
    TASKS_SORT,
    SIGN_IN,
    SIGN_OUT,
} from '../actions/types';

const INITIAL_STATE = {
    tasks_list: {},
    total_task_count: '',
    task_edit_id: null,
    task_edit_mode: false,
    username: '',
    isSignedIn: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_CREATE:
            return {...state, tasks_list: {[action.payload.id]: action.payload, ...state.tasks_list}};
        case TASKS_GET:
            return {...state,
                tasks_list: {..._.mapKeys(action.payload.tasks, 'id')},
                total_task_count: action.payload.total_task_count
            };
        case TASK_EDIT:
            return {...state,
                task_edit_mode: !state.task_edit_mode,
            };
        case TASKS_SORT:
            return {...state,
                tasks_list: {..._.mapKeys(action.payload.tasks, 'id')},
            };
        case PAGE_CHANGE:
            return {...state,
                tasks_list: {..._.mapKeys(action.payload.tasks, 'id')},
            };
        case EDIT_MODE:
            return {...state,
            task_edit_id: action.payload.id,
            task_edit_mode: action.payload.mode,
            username: action.payload.username
            };
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case SIGN_OUT:
            return { ...state, isSignedIn: false};
        default:
            return state;
    }
}