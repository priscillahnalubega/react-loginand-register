import React, { useState, useRef, useEffect } from "react";
import Authservice from "../Services/AuthService";
import Message from "../Componets/Message";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role:"" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(()=>{
 return()=>{
    clearTimeout(timeRID);
}
  },[])
 

  const onChange = e =>{
      setUser({...user,[e.target.name] : e.target.value});
      
  }
  const resetForm =  () =>{
    setUser({username : "", password: "" , role : ""})
}

  const onSubmit = e =>{
      e.preventDefault();
      AuthSevice.register(user).then(data=>{
         const{message}= dtat;
         setMessage(message);
         resetForm();
         if(!message.msgError){
             timerID = setTimeout(()=>{
                props.history.push('/login'); 
             },2000)

         }
      });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <h3>REGISTER</h3>
          <label htmlFor="username" className="sr-only">Username: </label>
          <input type="text" 
          name="username" 
          onChange={onChange} 
          className="form-control" 
          placeholder="Enter Username"></input>
           <label htmlFor="password" className="sr-only">Password: </label>
          <input type="password" 
          name="pasword" 
          onChange={onChange} 
          className="form-control" 
          placeholder="Enter Password"></input>
           <label htmlFor="role" className="sr-only">Password: </label>
          <input type="text" 
          name="role" 
          onChange={onChange} 
          className="form-control" 
          placeholder="Enter role"></input>
          <button className="btn btn-lg btn-primary btn-block" 
          type="submit">REGISTER</button>
      </form>
      {message ? <Message message={message}/>: null}
    </div>
  );
};

export default Register;
