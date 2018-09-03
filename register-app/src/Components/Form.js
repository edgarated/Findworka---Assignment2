import React, {Component} from "react";
import Input from './Input';
import Button from './Button';
import axios from "axios";

class Form extends Component {
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
    let name = event.target.value;
    this.setState({
         name: name

    })
}
submit(){

console.log("working")
console.log(this.state.name);

let newUser = {
   name:this.state.name,
   email:this.state.email,
   password:this.state.password

}
let registerUser = axios.post("https://v-forum-api.bahdcasts.com/api/register", newUser);
registerUser.then(response=>console.log(response))

}

    render() {
      return (
        <div>
         <Input value={this.state.name} onChange={this.handleInput} name={"name"} title = {"name"}/>
         <Input value={this.state.email} onChange={this.handleInput} name={"email"} title = {"email"}/>
         <Input value={this.state.password} onChange={this.handleInput} name={"password"} title = {"password"}/>
      
        <Button onClick={this.submit}/>
      
        </div>
      );
    }
  }
  
  export default Form;