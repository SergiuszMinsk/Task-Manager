import {SubmissionError} from 'redux-form'
import history from '../../history'
import { signIn } from '../../actions'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = (values, dispatch) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (!['admin'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
            })
        } else if (values.password !== '123') {
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!'
            })
        } else {
            history.push('/');
            return dispatch(signIn());
        }
    })
};

export default submit
