import React from "react";
import '../Css/login.css';
import axios from "axios";

class Login extends React.Component {
  constructor(){
    super()
  
  this.state = {
   email:'',
   password:''

  }
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);

  }
handleChange(event){
this.setState({
[event.target.name]: event.target.value

})

}

handleSubmit(){

  let newUser = {
    email:this.state.email,
    password:this.state.password
 
 }

 localStorage.setItem(this.state.email, newUser)
 let registeredUser = axios.post("https://v-forum-api.bahdcasts.com/api/login", newUser);
 registeredUser.then(response => console.log(response))
 registeredUser.catch(error => console.error(error));
 console.log(this.state);

}


render() {

return(

    <div>
  <div className="container">
    <header className="blog-header py-2">
      <div className="col-12 text-center">
        <a href="">
          <img className="blog-header-logo" src="logo.jpg" alt=""/>
        </a>
      </div>
    </header>
  </div>
  <div className="jumbotron">
    <div className="container con">
      <div className="con2">
        <h1>Welcome Back.</h1>
        <h3>Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you. </h3>
        <input type="email" name={"email"} className="form-control" id="email" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
        <input type="password" name={"password"} className="form-control" id="password" onChange={this.handleChange}  placeholder="Password" />
        <small id="error-message" className="text-center"> </small>
        <button className="btn btn-primary" id="btn" onClick={this.handleSubmit}> Login</button>  
        <div className="createaccount">
          <p>No account? <span><a href="signupmedium.html">Create One</a></span></p>
          <p>To make Medium work, we log user data and share it with service providers. Click "Sign in" above to accept Medium’s Terms of Service &amp; Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


);

}


}

export default Login;