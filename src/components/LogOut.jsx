import React from "react";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

export default function LogOut() {
  const { logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Saldrás de tu cuenta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5353",
      cancelButtonColor: "#333",
      color: "black",
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "¡Desconectado!",
          text: "Has cerrado sesión correctamente.",
          icon: "success",
        });
      }
    });
  };

  return (
    <button className="button-logout" onClick={handleLogout}>
      Salir
    </button>
  );
}
