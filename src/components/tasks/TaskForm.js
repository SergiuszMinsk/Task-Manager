import React from 'react'
import { Field, reduxForm } from 'redux-form'

class TaskForm extends React.Component {
    renderError = ( { error, touched } ) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
            <div className="ui container offset-top">
                <form onSubmit={this.onTaskSubmit} className="ui form">
                    <div className="field">
                        <input className="ui input" onChange={this.onInputChange} type="text" name="userValue" placeholder="Enter name..."/>
                    </div>
                    <div className="field">
                        <input className="ui input" onChange={this.onInputChange} type="email" name="userEmail" placeholder="Enter email..."/>
                    </div>
                    <div className="field">
                        <textarea name="userText" onChange={this.onInputChange} placeholder="Enter description..."></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="file" className="ui icon button">
                            <i className="file icon" />
                            Open File
                        </label>
                        <input type="file" id="file" style={{ display: "none"}} />
                    </div>
                    <div className="buttons-container">
                        <button className="ui button primary">Add Task</button>
                        <button className="ui button" onClick={(event) => event.preventDefault()}>Preview</button>
                    </div>
                </form>
            </div>

            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="userValue" component={this.renderInput} label="Enter name"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = `You must enter a title`;
    }

    if (!formValues.description) {
        errors.description = `You must enter a description`;
    }

    return errors;
};

export default reduxForm({
    form: 'taskForm',
    validate
})(TaskForm);