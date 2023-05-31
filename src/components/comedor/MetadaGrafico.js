const sensores=[
    {name:'dioxido_de_carbono', unidad:'ppm',
    vista: 'Dioxido de carbono(ppm)',rangoY : [0,2000]},
    {name:'temperatura', unidad: '°C',
    vista:'Temperatura(°C)'},
    {name:'humedad', unidad:'%',
    vista:'Humedad(%)'}
]
const getMetadataSensor =  (name) =>{
    return sensores.filter(e=>e.name == name)[0] || {};
}
const formatMetadataSensor = (metada) =>{
    return `${metada.name.replaceAll("_"," ")}(${metada.unidad})`;
}

export {sensores,getMetadataSensor,formatMetadataSensor};