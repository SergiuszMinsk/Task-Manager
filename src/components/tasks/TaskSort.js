import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sortTasks} from '../../actions';
import {Dropdown, Grid} from 'semantic-ui-react'

class TaskSort extends Component {
    state = {};

    onChange = (event, {value}) => this.setState({value}, () => {
        const sortName =
            value === 'email'
            || value === 'username'
            || value === 'text'
                ? 'sort_field'
                : 'sort_direction';

        this.props.sortTasks(sortName, value);
    });

    render() {
        const {value} = this.state;

        return (
            <Grid columns={1}>
                <Grid.Column>
                    <Dropdown
                        onChange={this.onChange}
                        options={this.props.options}
                        placeholder={this.props.placeholder}
                        selection
                        value={value}
                    />
                </Grid.Column>
            </Grid>

        )
    }
}

export default connect(null, {sortTasks})(TaskSort);