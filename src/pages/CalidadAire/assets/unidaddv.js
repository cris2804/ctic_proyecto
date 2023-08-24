function unidaddv(direccion){
    if(direccion < 300)
        return "ESE"
    else if(direccion < 315)
        return "ENE"
    else if(direccion < 330)
        return "E"
    else if(direccion < 350)
        return "SSE"
    else if(direccion < 390)
        return "SE"
    else if(direccion < 440)
        return "ssw"
    else if(direccion < 460)
        return "S"
    else if(direccion < 540)
        return "NNE"
    else if(direccion < 570)
        return "NE"
    else if(direccion < 640)
        return "WSW"
    else if(direccion < 660)
        return "SW"
    else if(direccion < 690)
        return "NNW"
    else if(direccion < 730)
        return "N"
    else if(direccion < 750)
        return "WNW"
    else if(direccion < 770)
        return "NW"
    else if(direccion < 800)
        return "W"
}

export default unidaddv;