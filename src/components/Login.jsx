import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import logo from "../assets/mfu.svg";
import Messages2 from "./Messages/Messages2";

const Login = () => {
  const [credentials, setCredentials] = useState({ correo: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(credentials.correo)) {
      setErrorMessage("Correo electrónico no válido");
      console.error("Correo electrónico no válido");
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }

    if (credentials.password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      console.error("La contraseña debe tener al menos 6 caracteres");
      setIsLoading(false);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }

    try {
      await login(credentials);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      setIsLoading(false);
      setErrorMessage(
        "Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="login-container">
        <div className="login-card">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="login-title">Inicia sesión</h2>
          <p className="instruction-text">
            Por favor ingresa tu correo y tu contraseña para acceder.
          </p>
          {errorMessage && <Messages2 textError={errorMessage} />}
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              name="correo"
              value={credentials.correo}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="input"
            />
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="input password-input"
              />
              <div className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <p className="link-text" onClick={() => navigate("/register")}>
              ¿No tienes cuenta? Crea una.
            </p>
            <div className="button-container">
              <button type="submit" disabled={isLoading} className="button">
                {isLoading ? "Enviando datos..." : "Acceder"}
              </button>
              <button
                type="button"
                onClick={() => setCredentials({ correo: "", password: "" })}
                className="button cancel-button"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
