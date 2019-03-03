import React from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { formValueSelector }  from 'redux-form';
import { Link } from 'react-router-dom'
import history from '../../history'

class TaskPreview extends React.Component {
    static renderActions() {
        return (
            <React.Fragment>
                console.log(this.submitBtn);
                <button onClick={this.submitBtn} className="ui button primary">
                    Add Task
                </button>
                <Link to="/tasks/new" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    render() {
        const content = (
        this.props.username ?
        <div>
            <div>{this.props.username}</div>
            <div>{this.props.email}</div>
            <div>{this.props.text}</div>
        </div> :
            `There is no values on the form fields`
        );

        return (
            <Modal title="Task Preview"
                   content={content}
                   actions={TaskPreview.renderActions()}
                   onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = state => ({
    text: formValueSelector('taskForm')(state, 'text'),
    username: formValueSelector('taskForm')(state, 'username'),
    email: formValueSelector('taskForm')(state, 'email'),
});

export default connect(mapStateToProps)(TaskPreview);