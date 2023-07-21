export const obtenerfecha = () => {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript empiezan en 0, por lo que debemos agregar 1
    const anioActual = fechaActual.getFullYear();
  
    let dia = ""
    let mes = ""
  
    if(diaActual < 10) dia = "0"+diaActual
    else dia = diaActual
    
    if(mesActual < 10) mes = "0"+mesActual
    else mes = mesActual
  
    return `${dia}/${mes}/${anioActual}`;
  }
