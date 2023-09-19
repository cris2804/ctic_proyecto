import Icon from '../img/icon.svg'

const ubicaciones = [
    {
        id: 1,
        logo: Icon,
        coordenadas: ["-12.016571", "-77.050389"],
    },
    {
        id: 2,
        logo: Icon,
        coordenadas: [-12.016569, -77.049569],
    }
]


const opciones = [
    {
        id: 1,
        opcion: "Moscas",
        variable: "mosca"
    },
    {
        id: 2,
        opcion: "Temperatura",
        variable: "temperatura"
    },
    {
        id: 3,
        opcion: "Humedad",
        variable: "humedad"
    },
    {
        id: 4,
        opcion: "Batería",
        variable: "bateria"
    }
]

const nombres = ["Moscas", "Temperatura (°C)", "Humedad (%)", "Batería (%)"]

export {ubicaciones, opciones, nombres}