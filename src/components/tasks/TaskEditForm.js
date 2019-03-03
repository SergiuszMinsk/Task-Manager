import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { editTask, changeMode } from '../../actions'

class TaskEditForm extends React.Component {
    onSubmit = formValues => {
        const formData = {
          id: this.props.taskEditId,
          username: this.props.taskUserName
        };

        this.props.editTask(formValues, formData);
    };

    onCancel = event => {
        event.preventDefault();
        const { taskEditMode, taskEditId } = this.props;

        this.props.changeMode(taskEditId, !taskEditMode);
    };

    renderTextArea = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className="field">
                <div className={className}>
                    <textarea {...input} placeholder={label} rows="10" cols="20"/>
                </div>
            </div>
        )
    };

    renderCheckbox = ({ input, label }) => {
        const COMPLETED_TASK = 10;

        return (<input
                checked={this.props.status === COMPLETED_TASK}
                className="ui checkbox" {...input}
                id="completed"
                placeholder={label}
                type="checkbox"
            />
        )
    };

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="text" component={this.renderTextArea} label="Enter description..."/>
                <div className="field field__flex">
                    <label htmlFor="completed">Task Completed</label>
                    <Field name="status" label="Task completed" component={this.renderCheckbox}/>
                    <button className="ui button primary" autoFocus>
                        Confirm changes
                    </button>
                    <button onClick={this.onCancel} className="ui button">Cancel</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        taskEditMode: state.tasks.task_edit_mode,
        taskEditId: state.tasks.task_edit_id,
        taskUserName: state.tasks.username,
        isSignedIn: state.tasks.isSignedIn
    }
};

export default connect(
    mapStateToProps,
    {editTask, changeMode}
)(reduxForm({ form: 'taskEditForm', enableReinitialize: true })(TaskEditForm));