import Icon from '../assets/icon.svg';

//const ubicaciones2 = require('./ubicaciones2.json');

export const ubicacionesCV = [
    {
        "clave": "cv-ctic",
        "nombre": "CTIC",
        "coordenadas": [-12.016460,-77.049896],
        "logo": Icon,
        "i": 1,
    },
    {
        "clave": "cv-comedor",
        "nombre": "Comedor Universitario",
        "coordenadas": [-12.018866,-77.049183],
        "logo": Icon,
        "i": 1,
    }
]
/*
ubicacionesCV.forEach((ubicacion) => {
    const logoObject = ubicaciones2.find((u) => u.nombre === ubicacion.nombre);
    if (logoObject) {
      ubicacion.logo = logoObject.logo;
    }
  });*/