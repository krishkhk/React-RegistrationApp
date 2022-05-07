import React from "react";
import $ from 'jquery';
class Register extends React.Component {
  constructor(props) {

    super(props);


    this.state = {

      id: props.id,

      firstName: "",

      lastName: "",
      email:"",
      password:""

    }

  }

  updateFirstName(event) {

    this.setState({

      firstName: event.target.value

    });

  }


  updateLastName(event) {

    this.setState({

      lastName: event.target.value

    });

  }

  updateEmail(event) {

    this.setState({

      email: event.target.value

    });

  }

  updatePassword(event) {

    this.setState({

      password: event.target.value

    });

  }


  save() {

    var context = this;


    $.ajax({

      url: "http://localhost:3000/users",

      method: "POST",

      data: {

        id: context.state.id,

        first_name: context.state.firstName,

        last_name: context.state.lastName,
        email_id:context.state.email,
        password_id:context.state.password

      },

      success: function(response) {

        alert("Successfully saved record!");

      },

      error: function(response) {

        alert("Error in saving record!");

      }

    });

  }

    
  render() {
    return (
        <div>
        <h1 align="center">Registration Page</h1>
        <div className="container">
        <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={this.state.firstName} onChange={this.updateFirstName.bind(this)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"  value={this.state.lastName} onChange={this.updateLastName.bind(this)} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" value={this.state.password} onChange={this.updatePassword.bind(this)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.save.bind(this)}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
        </div>
      </div>
    );
}
}

export default Register;