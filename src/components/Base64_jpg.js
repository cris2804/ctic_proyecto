import { useEffect, useState } from "react";

function Base64_jpg(base_64) {
  const [imagenURL, setImagenURL] = useState("");

  useEffect(() => {
    const convertirBase64AImagenJPEG = (base64String) => {
      return new Promise((resolve, reject) => {
        const imagen = new Image();
        imagen.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = imagen.width;
          canvas.height = imagen.height;

          const contexto = canvas.getContext("2d");
          contexto.drawImage(imagen, 0, 0);

          canvas.toBlob(
            (blob) => {
              const archivoJPEG = new File([blob], "imagen.jpg", {
                type: "image/jpeg",
              });
              resolve(URL.createObjectURL(archivoJPEG));
            },
            "image/jpeg",
            1
          );
        };

        imagen.onerror = () => {
          reject(new Error("Error al cargar la imagen"));
        };

        imagen.src = `data:image/png;base64,${base64String}`;
      });
    };

    // Lógica para obtener la cadena en formato Base64 de la imagen
    const base64String = base_64;

    convertirBase64AImagenJPEG(base64String)
      .then((url) => {
        setImagenURL(url);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      // Código de limpieza (opcional) a ejecutar cuando el componente se desmonta
    };
  }, [base_64]);

  return imagenURL;
}

export default Base64_jpg;
