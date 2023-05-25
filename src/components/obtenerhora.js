export const obtenerhora = () => {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  const minutosActuales = fechaActual.getMinutes();

  let min = "";
  minutosActuales < 10
    ? (min = "0" + minutosActuales)
    : (min = minutosActuales);

  return `${horaActual}:${min}`;
};
