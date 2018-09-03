import React from 'react';

const Input = (props) => {

    return (
      <div>

      <label htmlFor= "name">{props.title}</label>
      <input value= {props.value} onChange={props.Onchange} name={props.name} type={props.title} id={props.id}/>
      
      
      </div>


    );
}

export default Input;