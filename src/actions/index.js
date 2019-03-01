import { TASK_CREATE, TASK_EDIT, TASKS_GET } from './types';
import history from '../history'
import  tasks   from '../apis/tasks'

export const createTask = formValues => async dispatch => {
    const response = await tasks.post(`/create?developer=${formValues}`, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    console.log(response);

    // dispatch({type: TASK_CREATE, payload: response.data});
    // history.push('/');
};