//import { dividerClasses } from "@mui/material";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Grafica/Grafica.css'

import logoSmartCity from '../Grafica/logo_version_grafana.png'

export default function Grafica(){
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");


    const [activeButton,setActiveButton] = useState(null);
    const [activeButton1,setActiveButton1] = useState(null);
    const [text, setText] = useState('Grafico');

    const handleButtonOpcionesClick  =(index) => {
        setActiveButton(index)
        switch(index){
            case 0:
                setText("MOSCAS");
                break;
            case 1:
                setText("TEMPERATURA");
                break;
            case 2:
                setText("HUMEDAD");
                break;

            case 3:
                setText("BATERIA");
                break;
        }
    }

    const handleButtonLugaresClick  =(index) => {
        setActiveButton1(index)
        console.log(index)
    }
    return(
        <div className='container-general'>
            <div className='container-header'>
                <Link to ={'http://localhost:3000/senasa'} className='custom-link' >
                    <img className='logo-SmartCity' src={logoSmartCity} alt='logo'/>
                </Link>
                
            </div>
            <div className='container-secciones'>
                <div className='container-section-left'>
                    <div className= 'container-buttons1'>
                        <button className='button1'
                        className={`button1 ${activeButton1 === 0 ? 'active-lugares' : ''}`}
                        onClick={() => handleButtonLugaresClick(0)}>Trampa</button>
                        <button className='button1'
                        className={`button1 ${activeButton1 === 1 ? 'active-lugares' : ''}`}
                        onClick={() => handleButtonLugaresClick(1)}>Lugar</button>
                    </div>
                    <div className= 'panel1'>soy el panel</div>
                </div>
                <div className='container-section-right'>
                    <div className='container-buttons3'>
                            <button className='button3' 
                            className={`button3 ${activeButton === 0 ? 'active' : ''}`}
                            onClick={() => handleButtonOpcionesClick(0)}
                            >
                                Cantidad de moscas
                            </button>
                            <button className='button3'  
                            className={`button3 ${activeButton === 1 ? 'active' : ''}`}
                            onClick={() => handleButtonOpcionesClick(1)}
                            > Temperatura</button>
                            <button className= 'button3'
                            className={`button3 ${activeButton === 2 ? 'active' : ''}`}
                            onClick={() => handleButtonOpcionesClick(2)}
                            >Humedad</button>
                            <button className= 'button3'
                            className={`button3 ${activeButton === 3 ? 'active' : ''}`}
                            onClick={() => handleButtonOpcionesClick(3)}
                            >% de bateria</button>
                    </div>
                    
                </div>

            </div>
            <div className='graficos'>
                    {text}
                </div>


            <div className='container-buttons2'>
                <button className= 'button2'>Grafica</button>
                <button className= 'button2'>Descargar</button>
            </div>
        </div>
    )
}