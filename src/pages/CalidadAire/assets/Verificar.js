function restarFechas(fecha1, fecha2, co2, temp, hum) {
    // Convertir las fechas al formato "mm/d/yyyy" para que JavaScript las interprete correctamente
    fecha1 = fecha1.split("/").reverse().join("-");
    fecha2 = fecha2.split("/").reverse().join("-");
  
    // Calcular la diferencia en milisegundos
    var diferencia = new Date(fecha2) - new Date(fecha1);
  
    // Convertir la diferencia de milisegundos a días
    var diferenciaEnDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    var resultado = "";

    if(diferenciaEnDias === 0){
        if(!co2 && !temp && !hum) resultado = "Elija un rango de fechas válido y  los datos que desea descargar";
        else resultado = "Elija un rango de fechas"; 
    }else if(diferenciaEnDias < 0){
        resultado = "Elija un rango de fechas válido";
    }else {
        if(!co2 && !temp && !hum) resultado = "Elija los datos que desea descargar";
    }

    return resultado;
  }

export default function Verificar({date1, date2, isChecked, isCheckedt, isCheckedh}){    

    return(
        <div style={{color: 'red', textAlign: 'center', fontSize: '0.9rem', height: '50px'}}>
            {restarFechas(date1, date2, isChecked, isCheckedt, isCheckedh)}
        </div>
    )
}