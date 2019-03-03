import React from 'react'
import { Link } from 'react-router-dom'

class TaskCreate extends React.Component {
    render() {
        return (
                <Link to={`/tasks/new`} className="ui button primary">
                    Create Task
                </Link>
        )
    }
}

export default TaskCreate;