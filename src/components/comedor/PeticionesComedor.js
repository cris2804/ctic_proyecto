var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const getLastHourToTimestamp = (horas)=>{
    const now = new Date();
    const fourHoursAgo = new Date(now.getTime() - ( horas * 60 * 60 * 1000));
    const timestamp = fourHoursAgo.getTime();
    return timestamp;
}
    



const url_basic = "http://181.176.48.200:9090/api/v1/carga-viral/";
const comedirIds = [2201,2202,2203,2204,2205,2208,2209,2210,2212,2213];
const cantidad = 200;
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // Asegurarse de tener dos dígitos en las horas, minutos y segundos
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
  }
const pedirSensores = async (type = "dioxido_de_carbono") =>{
    //dioxido_de_carbono humedad temperatura
    //last=${cantidad}
    const fetchPromises = comedirIds.map((e) => {
        return fetch(`${url_basic}${e}?last=${cantidad}&columns=001001111`, requestOptions)
            .then(response => response.json())
            .then(result => {
                return result;
            });
    });
    
    const allResults = await Promise.all(fetchPromises);
    console.log(allResults);
    const resultado = allResults.filter(e => (e.length!==0));
    
    const n_res = resultado.length;
    let suma = 0;
    const tratado = [];
    for(let j=0;j<cantidad;j++){
        const element = {}
        for(let i = 0;i<resultado.length;i++){
        //    console.log(resultado[i][j].time_index);
            const dataObject = new Date(resultado[i][j].time_index);
            const timestamp = dataObject.getTime();
            suma += timestamp/n_res;
            element[resultado[i][j].idb] = resultado[i][j][type];
        }
        //formatTimestamp(Math.floor(suma))
        element['time'] = formatTimestamp(Math.floor(suma));
        tratado.push(element);
        //console.log(resultado);
    }
    return tratado;
    
}
const pedirSensoresTratar = async (type = "dioxido_de_carbono") =>{
    //dioxido_de_carbono humedad temperatura
    //return fetch(`${url_basic}${e}?last=${cantidad}&columns=001001111`, requestOptions)
    const timestamp = getLastHourToTimestamp(3);
    const fetchPromises = comedirIds.map((e) => {
        return fetch(`${url_basic}${e}?minDate=${timestamp}&columns=001001111`, requestOptions)
            .then(response => response.json())
            .then(result => {
                return result;
            });
    });
    
    const allResults = await Promise.all(fetchPromises)
    const resultado = allResults.filter(e => (e.length!==0));
    console.log("XD",resultado);
    const tratadoSensor = resultado.map((resSensor)=>{
        const rSensor = resSensor.map((es)=>{
            const dataObject = new Date(es.time_index);
            const timestamp = dataObject.getTime();
            const value = es[type];
            return {timestamp: timestamp,value:value,idb:es.idb};
        });
        return rSensor;
    })
    return tratadoSensor;
    
}
export {pedirSensores,comedirIds,formatTimestamp,pedirSensoresTratar};