import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import TaskEdit from './tasks/TaskEdit'
import TaskCreate from './tasks/TaskCreate'
import TasksGet from './tasks/TasksGet'

class App extends React.Component {
    state = {
        userValue: '',
        userEmail: '',
        userText: ''
    };

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onTaskSubmit = () => {

    };

    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={TasksGet}/>
                        <Route path="/tasks/new" exact component={TaskCreate}/>
                        <Route path="/tasks/edit" exact component={TaskEdit}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App