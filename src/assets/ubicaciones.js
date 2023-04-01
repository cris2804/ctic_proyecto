/* import Icon from '../assets/icon.svg'; */

const ubicaciones1 = require('./ubicaciones1.json');

export const ubicaciones = [
    {
      "clave": "ca-ctic",
      "nombre": "CTIC",
      "coordenadas": [-12.016460, -77.049896],
      "logo": null,
      "i": 0,
    },
    {
      "clave": "ca-puerta5",
      "nombre": "Puerta 5",
      "coordenadas": [-12.017942, -77.050863],
      "logo": null,
      "i": 0,
    },
    {
      "clave": "ca-puerta3",
      "nombre": "Puerta 3",
      "coordenadas": [-12.024657179121226, -77.04797475459107],
      "logo": null,
      "i": 0,
    },
  ];

  ubicaciones.forEach((ubicacion) => {
    const logoObject = ubicaciones1.find((u) => u.nombre === ubicacion.nombre);
    if (logoObject) {
      ubicacion.logo = logoObject.logo;
    }
  });