import React, { useState, useContext } from "react";
import Authservice from "../Services/AuthService";
import Message from "../Componets/Message";
import { AuthContext } from "../Context/AuthContext";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e =>{
     setUser({...user,[e.target.name] : e.target.value});
      
  }
  
  const onSubmit = e =>{
      e.preventDefault();
      AuthSevice.login(user).then(data=>{
          const{ isAuthenticated ,user,message}= data;
          if(isAuthenticated){
              authContext.setUser(user);
              authContext.setIsAuthenticated(isAuthenticated);
            props.history.push('/home')
          }
          else
          setMessage(message);
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <h3>LOGIN</h3>
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
          <button className="btn btn-lg btn-primary btn-block" 
          type="submit">Login</button>
      </form>
      {message ? <Message message={message}/>: null}
    </div>
  );
};

export default Login;
