import React from 'react'
import { createTask } from '../../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class TaskForm extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className="field">
                <div className={className}>
                    <input {...input} placeholder={label} autoComplete="off" />
                    {this.renderError(meta)}
                </div>
            </div>

        )
    };

    renderTextArea = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className="field">
                <div className={className}>
                    <textarea {...input} placeholder={label} rows="10" cols="40"/>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    };

    onSubmit = formValues => {
        this.props.createTask(formValues);
    };

    render() {
        const emailValidation = value =>
            value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
                'Invalid email address' :
            undefined;

        return (
            <div className="ui container offset-top">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="username" component={this.renderInput} label="Enter name..."/>
                    <Field name="email" component={this.renderInput}  validate={emailValidation} label="Enter email..."/>
                    <Field name="text" component={this.renderTextArea} label="Enter description..."/>
                    <div className="buttons-container">
                        <button className="ui button primary">Add Task</button>
                        <Link to={'/task/preview'} className="ui button">Preview</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.username) {
        errors.username = `You must enter a name`;
    }

    if (!formValues.email) {
        errors.email = `You must enter email`;
    }

    if (!formValues.text) {
        errors.text = `You must enter a description`;
    }

    return errors;
};

TaskForm = connect(
    null, { createTask }
)(TaskForm);

export default reduxForm({
    form: 'taskForm',
    destroyOnUnmount: false,
    validate
})(TaskForm);
