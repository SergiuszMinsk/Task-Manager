import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions'
import history from '../history'

class Header extends React.Component {
    onSignOut = () => {
        history.push('/');
        this.props.signOut();
    };

    render() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <div className="login-button-container">
                        <Link to={`/`} onClick={this.onSignOut} className="ui red button">Sign Out</Link>
                    </div>
                </div>

            )
        }
        return (
            <div className="login-button-container">
                <Link to={`/login/`} className="ui red button">Login</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.tasks.isSignedIn
    }
};

export default connect(mapStateToProps, { signOut })(Header);