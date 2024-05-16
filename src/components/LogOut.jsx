import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function LogOut() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <button onClick={handleLogout}>
      <h1>Salir</h1>
    </button>
  );
}
