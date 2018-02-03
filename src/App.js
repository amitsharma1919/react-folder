import React, { Component } from 'react';
import './style.css';

class AlertBox {
  render(){
    return(
      <div className={"alert alert-"+ this.props.type}>{this.props.children}</div>
    );
  }
};


class LoginForm extends Component {
  getInitialState (){
    return {
      showAlert: false
    }
  }

  register(e){
    e.preventDefault();
    
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();
    
    if (!email) {
      this.setState({showAlert: true});
      return;
    }
    
    alert("Thank You " + email);
    
    
    this.refs.email.value = '';
    this.refs.password.value = '';
    
  }

  render() {
    return(
      <div>
        <form onSubmit={this.register.bind(this)}>

          
          <div className="form-group">
            <label htmlFor="email" className="text-portion">Email: </label>
            
            <input type="email" className="form-control" ref="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-portion">Password: </label>
            <input type="password" className="form-control" ref="password" />
          </div>
          <input type="submit" className="btn" value="Submit" />
          <div className="form-group">
            <br />
            <p className="text-portion center-align">Or try Alternate Login:</p>
            
          <a className="blue waves-effect waves-light btn" href="#">Login using Facebook</a>
           <br /><br />
          <a className="waves-effect waves-light btn" href="#">Login using Linkedin</a>
           <br /><br />
          <a className="red waves-effect waves-light btn"href="#">Login using Google</a>
            
            
          </div>
            </form>
      </div>
    );  
}

  
}

export default LoginForm;
