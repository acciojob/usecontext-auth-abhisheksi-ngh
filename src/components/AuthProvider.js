import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
// import { children } from 'react/cjs/react.production.min';

const AuthProvider=({children})=>{
    const[isAuth, setAuth]=useState(false);
    const toggleAuth=()=>{
        setAuth(!isAuth);
    }
    return (
        <AuthContext.Provider value={{isAuth, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;