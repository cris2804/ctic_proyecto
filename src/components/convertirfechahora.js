import { obtenerhora } from "./obtenerhora";

function get_hora(timestamp){
    //const timestamp = 1688858888905; // Tu timestamp aquí
    const fecha = new Date(timestamp);

    get_fecha(timestamp)

    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    let h ="", m ="", s=""

    if(horas < 10) h = "0"+horas
    else h = horas

    if(minutos < 10) m = "0"+minutos
    else m = minutos

    if(segundos < 10) s = "0"+segundos
    else s = segundos

    return `${horas}:${m}:${s}`
}

function get_fecha(timestamp){
  //const timestamp = 1692126479006; // Tu timestamp aquí

  const fecha = new Date(timestamp);

  // Para obtener partes específicas de la fecha
  const año = fecha.getFullYear();
  const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
  const dia = fecha.getDate();

  let a = "", m = "", d = ""

  if(año < 10) a = "0"+año
  else a = año

  if(mes < 10) m = "0"+mes
  else m = mes

  if(dia < 10) d = "0"+dia
  else d = dia

  return `${a}/${m}/${d}`
}

function diferenciaHoras(hours, minutes, time1, time2) {
  const date1 = new Date(time1);
  const date2 = new Date(time2);

  const timeDifferenceMs = Math.abs(date1 - date2);
  const hoursDifference = Math.floor(timeDifferenceMs / 3600000); // 1 hora = 3600000 ms
  const minutesDifference = Math.floor((timeDifferenceMs % 3600000) / 60000); // 1 minuto = 60000 ms

  return hoursDifference < hours || (hoursDifference === hours && minutesDifference <= minutes);
}




export {get_hora, get_fecha, diferenciaHoras}