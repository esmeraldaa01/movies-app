import React from 'react'
import '../styles/Login.scss'
import { useHistory } from "react-router-dom";

export const Login = (props) => {
    const history = useHistory();

const Kliko = () => {
history.push(`/liste`);
};

    return (
        <div className="Login">
           <h2>Login</h2> 
           <div className="element1">
                  <input className="form-control mb-3" type="text" name="name" placeholder="Username"/>
            
            </div>
            <div className="element1">
                  <input className="form-control mb-3" type="password" name="password" placeholder="Password"/>
            </div>
            <div className="element4">
              <input onClick={Kliko} className="btn btn-primary" type="submit" value="Login"/>
              </div>
</div>

    )
}
