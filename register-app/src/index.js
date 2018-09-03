import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from "react-router-dom";



import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import FormPage from "./Components/Form";


ReactDOM.render(
    <BrowserRouter>
    <div>
    <nav>
    
<ul>
<li>

<Link to='/Login'>Login</Link>

</li>

<li>

<Link to='/Register'>Register</Link>

</li>

<li>

<Link to='/Form'>Form</Link>

</li>



</ul>


    </nav>

    <Route path="/Login" component={LoginPage} />

    <Route path="/Register" component={RegisterPage} />

    <Route path="/Form" component={FormPage} />
   
    
    </div>
    
    
    </BrowserRouter>
    
    ,document.getElementById('root'));
   
    
    
   



