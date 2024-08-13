import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="logbutton" style={{cursor:'pointer'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </li>
  );
};

export default LogoutButton;