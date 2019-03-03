import md5 from 'md5-js/src/md5'
import {
    PAGE_CHANGE,
    EDIT_MODE,
    TASK_CREATE,
    TASKS_GET,
    TASK_EDIT,
    SIGN_IN,
    SIGN_OUT
}
from './types';
import tasks from '../apis/tasks'

export const signIn = () => {
    return {
        type: SIGN_IN
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const changeMode = (id, mode, username) => {
    return {
        type: EDIT_MODE,
        payload: {
            id,
            mode,
            username
        }
    }
};

export const createTask = formValues => async dispatch => {
    const { username, email, text } = formValues;
    const bodyFormData = new FormData();

    bodyFormData.set('username', username);
    bodyFormData.set('email', email);
    bodyFormData.set('text', text);

    const response = await tasks.post(`/create?developer=${username}`, bodyFormData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    dispatch({type: TASK_CREATE, payload: response.data.message});
};

export const editTask = (formValues, formData) => async dispatch => {
    const bodyFormData = new FormData();
    const { username, id } = formData;
    const { text, status} = formValues;

    let paramsString = `status=${status}&text=${text}&token=beejee`;
    let hash = md5(paramsString);

    bodyFormData.set('text', text);
    bodyFormData.set('status', status);
    bodyFormData.set('token', 'beejee');
    bodyFormData.set('signature', hash);

    const response = await tasks.post(`/edit/${id}?developer=${username}`, bodyFormData);

    dispatch({type: TASK_EDIT, payload: response.data.status})

};

export const getTasks = () => async dispatch => {
    const response = await tasks.get('/?developer=Siarhei');

    dispatch({type: TASKS_GET, payload: response.data.message})
};

export const pageChange = pageNum => async dispatch => {
    const response = await tasks.get(`/?developer=Siarhei&sort_field=id&sort_direction=asc&page=${pageNum}`);

    dispatch({type: PAGE_CHANGE, payload: response.data.message})
};