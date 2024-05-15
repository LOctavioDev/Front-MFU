export default function Messages({ textError }) {
  return (
    <div className="message-container">
      <div className="error-message">
        <h2>{textError}</h2>
      </div>
    </div>
  );
}
