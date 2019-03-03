import React from 'react'
import {Field, reduxForm} from 'redux-form'
import submit from './submit'

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="ui input"/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const SubmitValidationForm = props => {
    const {error, handleSubmit, pristine, reset, submitting} = props;
    return (
        <form className="ui form" onSubmit={handleSubmit(submit)}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            {error && <strong>{error}</strong>}
            <div className="buttons-container">
                <button className="ui button" type="submit" disabled={submitting}>
                    Log In
                </button>
                <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'submitValidation'
})(SubmitValidationForm)
