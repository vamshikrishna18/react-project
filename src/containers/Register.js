    import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { regNewUser } from "../actions/index"
class Register extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            emailId: '',
            role: 'ROLE_CUSTOMER'

        }
    }

    captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        
        this.setState({ [name]: value })

    }



    registerUser = (event) => {

        event.preventDefault();
        console.log("userdata ... ", this.state);
        // this.props.regNewUser(this.state);
        this.props.history.push('/login')

    }

    render() {
        return (
            <React.Fragment>
                <form method="post">

                    Username: <input type="text" onChange={this.captureData} name="username"></input> <br></br><br></br>
                         Password: <input type="text" onChange={event => { this.setState({ password: event.target.value }) }} name="password"></input><br></br><br></br>
                         EmailId: <input type="text" onChange={event => { this.setState({ emailId: event.target.value }) }} name="emailId"></input><br></br><br></br>
                    <button onClick={this.registerUser}>Register</button>

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
    return bindActionCreators({ regNewUser: regNewUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);