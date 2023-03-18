import './css/DetalleCA.css';
import happy from '../components/images/happy.png';
import { useState } from 'react';
import { Ica } from '../assets/Ica';
import Grafico from '../components/Grafico';
import Grafico2 from '../components/Grafico2';
import NavBarText from '../components/NavBarText'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const gases = [
    {
        "key": 1,
        "nombre": "PM2.5",
    },
    {
        "key": 2,
        "nombre": "PM 10",
    },
    {
        "key": 3,
        "nombre": "SO2",
    },
    {
        "key": 4,
        "nombre": "NO2",
    },
    {
        "key": 5,
        "nombre": "H2S",
    },
    {
        "key": 6,
        "nombre": "NO",
    }
]

function Graficar(opc, nom){
    if(opc === 0){
        return <Grafico nombre={nom}/>
    }else if(opc === 1){
        return <Grafico2 cantidad={96} nombre={nom}/>
    }else if(opc === 2){
        return <Grafico2 cantidad={672} nombre={nom}/>
    }
}

export default function DetalleCA(){
    const [isHovered, setIsHovered] = useState(false);
    const [seleccionado, setSeleccionado] = useState(0);
    const [opcion, setOpcion] = useState("PM2.5");

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
        
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const Seleccionar = (indice) => {
        setSeleccionado(indice);
    }

    const handleOpcion = (opc) => {
        setOpcion(opc);
    }

    return (
        <div className='container__detalle__ca'>
            <div className='nav__main' style={{marginBottom: "30px"}}>
                <NavBarText/>
            </div>
            <div className='container__detalle__ca__main'>
                <div className='container__detalle__ca__left'>
                    <div style={{boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 10px 10px"}}>
                        <div style={{backgroundColor: "#f3f7fb", paddingBottom: "25px", paddingTop: "25px", borderRadius: "2px 2px 0px 0px"}}>
                            <div style={{color: "#198CFF", fontSize: "15px", fontWeight: "500", paddingBottom: "4px", marginLeft: "10px"}}>CLIMA</div>
                            <div style={{marginLeft: "10px", fontSize: "20px"}}>¿Cuál es el clima actual en el laboratorio Calidad de Aire (CTIC)?</div>
                        </div>
                        <div style={{backgroundColor: "white", borderRadius: "0px 0px 10px 10px", paddingBottom: "30px"}}>
                            <div className='container__prop__valor' style={{paddingTop: "30px"}}>
                                <div style={{color: "#3c3c3c"}}>CLIMA</div>
                                <div style={{fontWeight: "500"}}>Parcialmente nublado</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div style={{color: "#3c3c3c"}}>TEMPERATURA</div>
                                <div style={{fontWeight: "500"}}>26 ºC</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div style={{color: "#3c3c3c"}}>VIENTO</div>
                                <div style={{fontWeight: "500"}}>12.6 km/h</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div style={{color: "#3c3c3c"}}>PRESIÓN</div>
                                <div style={{fontWeight: "500"}}>1014 mbar</div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:'30px', backgroundColor: "white", boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 10px 10px"}}>
                        <div className='container__detalle__descargar' style={{backgroundColor: "#f3f7fb",paddingTop: "30px",paddingBottom: "30px", fontSize: "15px", fontWeight: "500"}}>
                            <div style={{color: "#198CFF", paddingBottom: "4px"}}>DESCARGAR DATOS (CSV)</div>
                            <div style={{fontSize: "20px", fontWeight: "400", paddingRight: "40px"}}> Aqui podra descargar distintos datos de nuestra plataforma, podra escoger el rango de fechas y los sensores a analizar.</div>
                        </div>
                        <div className='container__detalle__descargar' style={{fontWeight: "500"}}>
                            Fecha Inicial:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="date" id="start" name="trip-start"
                            value="2023-02-22"
                            min="2023-01-01" max="2023-12-31"></input>
                        </div>
                        <div className='container__detalle__descargar' style={{fontWeight: "500"}}>
                            Fecha Final:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="date" id="start" name="trip-start"
                            value="2023-02-28"
                            min="2023-01-01" max="2023-12-31"></input>
                        </div>
                        <div className='container__detalle__descargar' style={{paddingTop: "25px"}}>
                            PM 2.5 μg/m³ &nbsp;&nbsp;<input type="checkbox" id="cbox1" value="first_checkbox"></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            SO₂ μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox"></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            NO₂ μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox"></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            H₂S μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox"></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            NO μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox"></input>
                        </div>
                        <div className='container__detalle__descargar' style={{paddingTop: "20px", paddingBottom: "30px", textAlign: "center"}}>
                            <button style={{backgroundColor: "#7EDAE5", display: "flex",alignItems: "center", flexWrap: "wrap", fontFamily: "'Space Grotesk', sans-serif",color: "#2086D8", fontSize:"20px", fontWeight: "500", borderColor:"#2086D8", borderRadius: "20px", padding: "10px 20px 10px 20px", cursor: "pointer"}}>Descargar CSV&nbsp;&nbsp; <CloudDownloadIcon /></button>
                        </div>
                    </div>
                </div>
                <div className='container__detalle__ca__right'>
                    <div className='container__estado__ca' style={{boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 5px 5px"}}>
                        <div className='container__valor__tipo'>
                            <div className='container__valor' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>40</div>
                            <div className='container__indice__tipo'>
                                <div className='indice' style={{fontSize: "16px"}}>ÍNDICE ICA EN VIVO</div>
                                <div className='tipo' style={{fontSize: "30px",fontWeight: "500"}}>Bueno</div>
                            </div>
                        </div>
                        <div className='logo__imagen'>
                            <img src={happy} alt='logo-happy'/>
                        </div>
                        <div className={isHovered ? 'container__detalles__ica':'container__detalles__ica2'}>
                            {Ica.map((element, i) => {
                                return(<div className='container__ica__rango__nombre'>
                                        <div style={{background: element.color}}>{element.rango}</div>
                                        <div key={i}>{element.nombre}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='container__grafico__rangos__tipos__gases' style={{boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 5px 5px"}}>
                        <div className='container__tipos__gases__ca'>
                            {gases.map((gas)=>{
                                return <div key={gas.nombre} onClick={()=>handleOpcion(gas.nombre)} className={opcion === gas.nombre ? 'seleccionado':''}>{gas.nombre}</div>
                            })}
                        </div>
                        <div className='container__rango__tiempo'>
                            <div className={seleccionado === 0 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(0)}>EN VIVO</div>
                            <div className={seleccionado === 1 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(1)}>DÍA</div>
                            <div className={seleccionado === 2 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(2)}>SEMANA</div>
                        </div>
                        <div className='container__grafico'>
                            {Graficar(seleccionado, opcion)}
                        </div>
                        <div className='container__porcentaje__anual__dias'>
                           <span>---</span> Porcentaje anual 33 ICA
                        </div>
                        <div className='container__porcentaje__anual__dias dias__al__año'>
                            <div><span>Días al año en este nivel</span></div>
                            {Ica.map((element) =>{
                                return( 
                                    <div className='container__porcentaje__cantidad'>
                                        <div className='container__porcentaje'>
                                            <div className='cien__por__ciento'>
                                                <div className='porcentaje' style={{width: `${(element.valor/365)*100}%`,background: `${element.color}`}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='container__cantidad'>{element.valor}</div>
                                    </div>)
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}