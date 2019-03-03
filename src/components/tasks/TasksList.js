import React from 'react'
import _ from 'lodash'
import {getTasks, changeMode} from '../../actions'
import {connect} from 'react-redux'
import Pagination from '../PaginationCompact'
import TaskEditForm from './TaskEditForm';

class TasksList extends React.Component {
    componentDidMount() {
        this.props.getTasks();
    }

    changeMode = (id, mode, username) => {
        this.props.changeMode(id, mode, username);
    };

    renderList() {
        const {taskEditMode, isSignedIn} = this.props;
        const COMPLETED_TASK = 10;

        return this.props.tasks.map(task => {
            const {id, username, email, text, status } = task;
            if (id === this.props.taskEditId && taskEditMode) {
                return (
                    <div key={id}>
                        <TaskEditForm status={status} initialValues={_.pick(task, 'text')}/>
                    </div>
                )
            }
                return (
                    <div className="column" key={id}>
                        <div className="ui segment">
                            {status === COMPLETED_TASK && isSignedIn ? <i className="check icon"/> : ''}
                            <div className="task-item">{username}</div>
                            <div className="task-item">{email}</div>
                            <div className="task-item">{text}</div>
                            <button onClick={() => this.changeMode(id, !taskEditMode, username)}
                                    className="ui primary edit-button button">
                                Edit
                            </button>
                        </div>
                    </div>
                )
        });
    }


    render() {
        return (
            <div>
                <div className="ui three column grid offset">
                    {this.renderList()}
                </div>
                <Pagination/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: Object.values(state.tasks.tasks_list),
        taskEditId: +state.tasks.task_edit_id,
        taskEditMode: state.tasks.task_edit_mode,
        status: state.tasks.status,
        isSignedIn: state.tasks.isSignedIn
    }
};

export default connect(mapStateToProps, {getTasks, changeMode})(TasksList);