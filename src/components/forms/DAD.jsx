import React, { useState } from "react";
import camera from "../../assets/camera.svg";

export default function DAD() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
    }
  };

  return (
    <div className="container-dad">
      <input
        id="file"
        type="file"
        className="input-file"
        onChange={handleFileChange}
      />
      <label htmlFor="file">
        {selectedFile ? (
          <img src={selectedFile} alt="preview" className="preview-image" />
        ) : (
          <img src={camera} alt="input" />
        )}
      </label>
      <span className="p-f" htmlFor="file">Agregar una imagen</span>
    </div>
  );
}
