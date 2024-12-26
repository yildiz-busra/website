import React, { useContext } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LogoutButton = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Button color="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
