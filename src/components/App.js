
import React from "react";
import Auth from "./Auth";
import AuthProvider from "./AuthProvider";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <AuthProvider>
          <Auth/>
          
        </AuthProvider>
        
    </div>
  )
}

export default App
