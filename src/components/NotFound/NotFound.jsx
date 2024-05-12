export default function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-title">Esta página no existe</h1>
      <p className="error-message">
        Lo sentimos, la página que buscó no se encuentra
      </p>
      <button
        className="error-button"
        onClick={() => (window.location.href = "/")}
      >
        Ir a la página principal.
      </button>
    </div>
  );
}
