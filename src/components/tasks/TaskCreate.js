import React from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../actions'

class TaskCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createTask(formValues);
    };

    render() {
        return <div>TaskCreate</div>
    }
}

export default connect(null, {createTask})(TaskCreate)