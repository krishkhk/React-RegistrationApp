import React from "react";

class Loging extends React.Component {
    constructor() {
        super();
        this.state = {
          username: "",
          password: "",
        };
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChande = this.passwordChande.bind(this);
      }
      userNameChange = (e) => {
        this.setState({
          username: e.target.value,
        });
      };
      passwordChande = (e) => {
        this.setState({
          password: e.target.value,
        });
      };
      login = (e) => {
          e.preventDefault();
        alert("Login Details "+this.state.username+" "+this.state.password);
        if(this.state.username === 'krishna' && this.state.password === 'krishna@123'){
            alert("Welcome to Dashboard");
           window.location.replace('http://localhost:3000/dashboard');
        }else{
            alert("Invalid Username/Password. Please try again");
        }
        console.log(this.state);
      };

  
  render() {
    return (
    
        <div>
        <h1 align="center">Login Page</h1>
        <div className="container">
          <form>
            <div className="mb-3">
              <label  className="form-label">
                Enter UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUserName"
                onChange={this.userNameChange}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.passwordChande}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.login}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Loging;