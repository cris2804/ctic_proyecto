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
    },
    {
        id: 2,
        opcion: "Temperatura",
    },
    {
        id: 3,
        opcion: "Humedad",
    },
    {
        id: 4,
        opcion: "Batería",
    }
]

const nombres = ["Moscas", "Temperatura (°C)", "Humedad (%)", "Batería (%)"]

export {ubicaciones, opciones, nombres}