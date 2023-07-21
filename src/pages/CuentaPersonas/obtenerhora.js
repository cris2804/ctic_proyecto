export const obtenerhora = () => {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActuales = fechaActual.getMinutes();
    const segundoActuales = fechaActual.getSeconds();
  
    let min = "";
    let seg = "";
    minutosActuales < 10 ? (min = "0" + minutosActuales) : (min = minutosActuales);
    segundoActuales < 10 ? (seg = "0" + segundoActuales) : (seg = segundoActuales);
  
    return `${horaActual}:${min}:${seg}`;
  };
  