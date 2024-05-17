import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/mfu.svg";
import authService from "../services/AuthService";
import Messages2 from "./Messages/Messages2";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userInfo.correo)) {
      setErrorMessage("Correo electrónico no válido");
      console.error("Correo electrónico no válido");
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }

    if (userInfo.contraseña < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      console.error("La contraseña debe tener al menos 6 caracteres");
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }

    try {
      const res = await authService.register(userInfo);
      console.log(res);

      if (res.response) {
        navigate("/login");
      } else {
        // Check for specific error message
        if (res.message === "Este correo ya está en uso") {
          setErrorMessage("Este correo ya está en uso. Por favor, utiliza otro.");
        } else {
          setErrorMessage("Registro fallido. Por favor, inténtalo de nuevo.");
        }
        setIsLoading(false);
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Register failed", error);
      setErrorMessage("Error en el registro. Por favor, inténtalo de nuevo más tarde.");
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="registro-title">Crear Cuenta</h2>
        <p className="instruction-text">Completa los siguientes campos para crear tu cuenta.</p>
        {errorMessage && <Messages2 textError={errorMessage} />}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="inputs-container">
            <input
              type="text"
              name="nombre"
              value={userInfo.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="input-data"
            />
            <input
              type="text"
              name="apellido"
              value={userInfo.apellido}
              onChange={handleChange}
              placeholder="Apellidos"
              className="input-data"
            />
          </div>
          <input
            type="text"
            name="correo"
            value={userInfo.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="input"
          />
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="contraseña"
              value={userInfo.contraseña}
              onChange={handleChange}
              placeholder="Contraseña"
              className="input password-input"
            />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="link-text" onClick={() => navigate('/login')}>
            ¿Ya tienes cuenta? Inicia sesión.
          </p>
          <div className="button-container">
            <button type="submit" disabled={isLoading} className="button">
              {isLoading ? 'Enviando datos...' : 'Crear'}
            </button>
            <button
              type="button"
              onClick={() => setUserInfo({ nombre: '', apellido: '', correo: '', contraseña: '' })}
              className="button cancel-button"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
