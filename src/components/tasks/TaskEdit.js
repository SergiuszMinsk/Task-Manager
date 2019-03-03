import React from 'react'
import { connect } from 'react-redux'
import TaskEditForm from './TaskEditForm'

class TaskEdit extends React.Component {

    render() {
        return (
           <TaskEditForm />
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.tasks.tasks_list
    };
};

export default connect(mapStateToProps)(TaskEdit);