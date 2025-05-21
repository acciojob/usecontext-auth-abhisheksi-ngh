import React, {useContext} from "react";
import { AuthContext } from "./AuthContext";


const Auth =()=>{
    const{isAuth, toggleAuth}= useContext(AuthContext);
    return (
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            <p>{isAuth?'You are now authenticated, you can proceed' : 'you are not authenticated'}</p>
            <label>
                <input type="checkbox" 
             checked={isAuth}
            onChange={toggleAuth} />
            I'm not a robot
            </label>
        </div>
    )
}
export default Auth;