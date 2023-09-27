// Logout.js
import React from "react";
import { useHistory } from "react-router-dom";

function Logout({ onLogout }) {
  const history = useHistory();

  const handleLogout = () => {
    // Perform any logout logic here, e.g., clearing authentication state
    onLogout();
    history.push("/login"); // Redirect to the login page after logout
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
