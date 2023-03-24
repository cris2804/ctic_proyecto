export const obtenerfecha = () => {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript empiezan en 0, por lo que debemos agregar 1
    let mes="";

    switch(mesActual){
        case 1: mes = "Ene"; break;
        case 2: mes = "Feb"; break;
        case 3: mes = "Mar"; break;
        case 4: mes = "Abr"; break;
        case 5: mes = "May"; break;
        case 6: mes = "Jun"; break;
        case 7: mes = "Jul"; break;
        case 8: mes = "Ago"; break;
        case 9: mes = "Set"; break;
        case 10: mes = "Oct"; break;
        case 11: mes = "Nov"; break;
        case 12: mes = "Dic"; break;
        default: mes = "";
    }

    return `${mes} ${diaActual}`;
}