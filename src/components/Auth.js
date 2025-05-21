import React, {useContext} from "react";
import { AuthContext } from "./AuthContext";


const Auth =()=>{
    const{isAuth, toggleAuth}= useContext(AuthContext);
    return (
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            <p>{isAuth?'You are now authenticated, you can proceed' : 'you are not authenticated'}</p>
            <div>
                <input type="checkbox" 
             checked={isAuth}
            onChange={toggleAuth} />
            I'm not a robot
            </div>
        </div>
    )
}
export default Auth;