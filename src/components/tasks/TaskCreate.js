import React from 'react'
import {Link} from 'react-router-dom'
import TaskSort from './TaskSort';

class TaskCreate extends React.Component {

    render() {
        let username = 'username';
        let email = 'email';
        let text = 'text';

        let ascending = 'asc';
        let descending = 'desc';

        const sortByFieldOptions = [
            {key: username, text: username, value: username},
            {key: email, text: email, value: email},
            {key: text, text: text, value: text}
        ];

        const sortByDirectionOptions = [
            {key: 'Ascending', text: 'Ascending', value: ascending},
            {key: 'Descending', text: 'Descending', value: descending}
        ];

        return (
            <div>
                <Link to={`/tasks/new`} className="ui button primary">
                    Create Task
                </Link>
                <div className="sort-container">
                    <TaskSort options={sortByFieldOptions} placeholder="Sort by Fields"/>
                    <TaskSort options={sortByDirectionOptions} placeholder="Sort By Direction"/>
                </div>
            </div>

        )
    }
}

export default TaskCreate;