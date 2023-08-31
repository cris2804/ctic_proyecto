export const obtenerhora = () => {
  const fechaActual = new Date()
  const horaActual = fechaActual.getHours()
  const minutosActuales = fechaActual.getMinutes()
  const segundosActuales = fechaActual.getSeconds()

  let hor = ""
  horaActual < 10
    ? (hor = "0" + horaActual)
    : (hor = horaActual)

  let min = ""
  minutosActuales < 10
    ? (min = "0" + minutosActuales)
    : (min = minutosActuales);

  let seg = ""
  segundosActuales < 10
    ? (seg = "0" + segundosActuales)
    : (seg = segundosActuales)

  return `${hor}:${min}:${seg}`
};
