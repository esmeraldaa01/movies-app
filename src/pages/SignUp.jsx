import React from 'react'
import '../styles/SignUp.scss'
import { useHistory } from "react-router-dom"

export const SignUp = (props) => {
    const history = useHistory();
    
const Kliko1 = () => {
    history.push(`/liste`);
}

    return (
        
        <div className=" SignUp">
            <h2>Sign Up</h2>
          <form>
          <div className="element1">
                  <input   className="form-control mb-2" type="text" name="name" placeholder="Username"/>
            </div>
            <div className="element2">
                  <input className="form-control mb-2" type="text" name="email" placeholder="Email"/>
              </div>
              <div className="element3">
                  <input   className="form-control mb-2" type="password" name="passwordd" placeholder="Password"/>
              </div>
              <div className="element4">
              <input  onClick={Kliko1} className="btn btn-primary mb-2" type="submit" value="Sign up"/>
              </div>
          </form>
        </div>
    )
}
