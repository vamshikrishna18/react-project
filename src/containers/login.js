import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../actions/index"
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            emailId: '',
            role: 'ROLE_ADMIN'

        }
    }

    captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        
        this.setState({ [name]: value })

    }



    login = (event) => {

        event.preventDefault();
        console.log("userdata ... ", this.state);
        loginUser(this.state);

    }

    render() {
        if(this.props.isUserLoggedIn) {
            this.props.history.push('/product')
        }
        console.log(this.props.isUserLoggedIn)
        return (
            <React.Fragment>
                <form>
                        EmailId: <input type="text" onChange={event => { this.setState({ emailId: event.target.value }) }} name="emailId"></input><br></br><br></br>
                         Password: <input type="text" onChange={event => { this.setState({ password: event.target.value }) }} name="password"></input><br></br><br></br>
                    <button onClick={this.login}>Login</button>

                </form>
            </React.Fragment>

        );
    }
}
function mapStateToProps(applicationState) {
    console.log('applicationState', applicationState);

    return { isLoggedIn: applicationState.isUserLoggedIn };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser: loginUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);