import React from "react";
import '../Css/register.css';
import axios from "axios";

class Register extends React.Component {
  constructor(){
    super();
    this.state={
        name: '',
        email: '',
        password:''
    }
    this.submit=this.submit.bind(this);
    this.handleInput=this.handleInput.bind(this);
    
    }
    
    handleInput(event){
        this.setState({
             [event.target.name]: event.target.value
    
        })
    }
    submit(){
    
    // console.log("working")
    // console.log(this.state.name);
    
    let newUser = {
       name:this.state.name,
       email:this.state.email,
       password:this.state.password
    
    }
    localStorage.setItem(this.state.email, newUser)
    let registerUser = axios.post("https://v-forum-api.bahdcasts.com/api/register", newUser);
    registerUser.then(response => console.log(response))
    registerUser.catch(error => console.error(error));
    console.log(this.state);
    
    
    }

render() {

return(

  <div className="jumbotron">
  <div className="container con">
    <div className="con2">
      <h1 className="con22">Join Medium.</h1>
      <h3>Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.</h3>
      <div className="btnbox">
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter User Name" value={this.state.name} onChange={this.handleInput} name={"name"} title = {"name"} />
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInput} name={"email"} title = {"email"}/>
        <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} name={"password"} title = {"password"} />
        <button type="submit" className="btn btn-primary" id="btn" onClick={this.submit}>Register</button>
        <button type="submit" className="btn btn-primary" id="spinning-btn"><i className="fas fa-spinner fa-pulse" /></button>
      </div>
      <div className="createaccount">
        <p className="noaccount">Already have an account?  <span><a href="">Sign in.</a></span></p>
        <p>To make Medium work, we log user data and share it with service providers. Click "Sign up" above to accept Medium’s Terms of Service &amp; Privacy Policy.</p>
      </div>
    </div>
  </div>
</div>


);

}


}

export default Register;