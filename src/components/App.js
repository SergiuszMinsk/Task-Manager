import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import TaskForm from '../components/tasks/TaskForm'
import TaskEditForm from './tasks/TaskEditForm'
import TaskCreate from './tasks/TaskCreate'
import TasksList from './tasks/TasksList'
import TaskPreview from './tasks/TaskPreview'
import SubmitValidationForm from './login/SubmitValidationForm'
import Header from './Header'
import history from '../history'

class App extends React.Component {
    render() {
        return (
            <div className="ui container offset-top">
                <Router history={history}>
                    <div>
                    <Header />
                        <Switch>
                            <Route path="/" exact component={() =>
                                <div>
                                    <TaskCreate />
                                    <TasksList />
                                </div>}
                            />
                            <Route path="/tasks/new" exact component={() =>
                                <div>
                                <TaskForm />
                                <TasksList />
                            </div>} />
                            <Route path="/login/" exact component={() => <SubmitValidationForm />} />
                            <Route path="/task/preview" exact component={TaskPreview} />
                            <Route path="/tasks/edit/:id" exact component={TaskEditForm} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;