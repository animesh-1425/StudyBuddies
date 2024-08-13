import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

  return (
    <li style={{cursor:'pointer'}} className="logbutton"   onClick={() => loginWithRedirect()}>
      Log In
    </li>
  );
};

export default LoginButton;