import './css/DetalleCAI.css';
import happy from '../components/images/happy.png';
import { useState } from 'react';
import Grafico from '../components/Grafico';
import Grafico2 from '../components/Grafico2';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomSelect from "../components/CustomSelect";

const options = ["Oficina de Administración", 
                 "Laboratorio SmartCity", 
                 "Oficina de Calidad Universitaria",
                 "Oficina de Capacitación",
                 "Secretaría"
                ];

const gases = [
    {
        "key": 1,
        "nombre": "Co2",     
    },
    {
        "key": 2,
        "nombre": "Temperatura",
    },
    {
        "key": 3,
        "nombre": "Humedad",
    }
]

function Graficar(opc, nom){
    const datos = Array.from({ length: 20 }, () => {
        return { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 500) }
      });
    if(opc === 0){
        return <Grafico nombre={nom} datos={datos}/>
    }else if(opc === 1){
        return <Grafico2 cantidad={96} nombre={nom}/>
    }
}

export default function DetalleCAI(){
    // para obtener el id de la ruta donde nos encontramos
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");


    const [seleccionado, setSeleccionado] = useState(0);
    const [opcion, setOpcion] = useState(null);
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [showCalendar1, setShowCalendar1] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    //const [selectedOption, setSelectedOption] = useState('');
    const [dat, setDat] = useState(gases);

    /*--- */
    const [isChecked, setIsChecked] = useState(true);
    const [isCheckedt, setIsCheckedt] = useState(true);
    const [isCheckedh, setIsCheckedh] = useState(true);

  const onChange1 = (date) => {
    setDate1(date);
    setShowCalendar1(!showCalendar1);
  }
  const onChange2 = (date) => {
    setDate2(date);
    setShowCalendar2(!showCalendar2);
  }

  const toggleCalendar1 = () => {
    setShowCalendar1(!showCalendar1);
  }
  const toggleCalendar2 = () => {
    setShowCalendar2(!showCalendar2);
  }

  const handleMostrar = () => {
    console.log("De: "+date1.toLocaleDateString(),"Hasta: "+date2.toLocaleDateString());
  }
    const Seleccionar = (indice) => {
        setSeleccionado(indice);
    }

    const handleOpcion2 = (opc) => {
        setOpcion(opc);
        console.log(opc);
    }

    //para el select
    const handleChange = (option) => {
        console.log(`Selected option: ${option}`);
      };
  /*--- */
  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    if(isChecked){ 
        const newArray = dat.filter(obj => obj.key !== 1);
        setDat(newArray);
    }else{
        const newArray = dat;
        newArray.unshift({ key: 1, nombre: "Co2" });
    }
  }
  function handleCheckboxChanget(event){
    setIsCheckedt(event.target.checked);
    if(isCheckedt){
        const newArray = dat.filter(obj => obj.key !== 2);
        setDat(newArray);
    }else{
        const newArray = dat;
        newArray.push({ key: 2, nombre: "Temperatura" });
    }
  }
  function handleCheckboxChangeh(event){
    setIsCheckedh(event.target.checked);
    if(isCheckedh){ 
        const newArray = dat.filter(obj => obj.key !== 3);
        setDat(newArray);
    }else{
        const newArray = dat;
        newArray.push({ key: 3, nombre: "Humedad" });
    }
  }

    return(
        <div className='container__detalle__ca__main'>
                <div className='container__detalle__ca__left'>
                    <div  style={{ backgroundColor: "white", height:"90vh", boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 10px 10px"}}>
                        <div className='container__detalle__descargar cdd'>
                            <div style={{color: "#198CFF", paddingBottom: "4px", fontSize: "1.4rem"}}>DESCARGAR DATOS (CSV)</div>
                            <div style={{fontSize: "20px", fontWeight: "400", paddingRight: "1rem"}}> 
                                En esta plataforma, podrás descargar diversos datos seleccionando el rango de fechas y los sensores que desees analizar.
                            </div>
                        </div>
                        <div className='selector__de__lugar__cai'>
                            <div className='select'>
                                <CustomSelect options={options} onChange={handleChange} id={id}/>
                            </div>
                        </div>
                        <div className='container__detalle__descargar container__rango__fecha__descargar' style={{fontWeight: "500"}}>
                            <div>Fecha Inicial: </div>
                            <div>
                                <button onClick={toggleCalendar1} className='container__btn__calendar'>
                                <div><CalendarMonthIcon/></div>
                                <div>{date1.toLocaleDateString()}</div>
                                </button>
                                {showCalendar1 && (
                                <Calendar
                                    onChange={onChange1}
                                    value={date1}
                                />
                                )}
                            </div>
                        </div>
                        <div className='container__detalle__descargar container__rango__fecha__descargar' style={{fontWeight: "500"}}>
                            <div>Fecha Final:&nbsp;&nbsp; </div>
                            <div>
                                <button onClick={toggleCalendar2} className='container__btn__calendar'>
                                <div><CalendarMonthIcon/></div>
                                <div>{date2.toLocaleDateString()}</div>                    
                                </button>
                                {showCalendar2 && (
                                <Calendar
                                    onChange={onChange2}
                                    value={date2}
                                />
                                )}
                            </div>
                        </div>
                        <div className='container__detalle__descargar' style={{paddingTop: "25px"}}>
                            CO2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            Temperatura &nbsp;&nbsp;&nbsp;&nbsp;    
                            <input type="checkbox" id="cbox1" value="first_checkbox" checked={isCheckedt} onChange={handleCheckboxChanget}></input>
                        </div>
                        <div className='container__detalle__descargar'>
                            Humedad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="cbox1" value="first_checkbox" checked={isCheckedh} onChange={handleCheckboxChangeh}></input>
                        </div>
                        <div className='container__detalle__descargar' style={{paddingTop: "20px", paddingBottom: "30px", textAlign: "center"}}>
                            <button onClick={handleMostrar} style={{backgroundColor: "#7EDAE5", display: "flex",alignItems: "center", flexWrap: "wrap", fontFamily: "'Space Grotesk', sans-serif",color: "#2086D8", fontSize:"20px", fontWeight: "500", borderColor:"#2086D8", borderRadius: "20px", padding: "10px 20px 10px 20px", cursor: "pointer"}}>Descargar CSV&nbsp;&nbsp; <CloudDownloadIcon /></button>
                        </div>
                    </div>
                </div>
                <div className='container__detalle__ca__right'>
                    <div className='container__estado__ca' style={{boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 5px 5px"}}>
                        <div className='container__valor__tipo'>
                            <div className='container__indice__tipo'>
                                <div className='indice' style={{fontSize: "2rem",fontWeight: "700", color: "#000000", textTransform: "uppercase"}}>{id}</div>
                                <div className='tipo' style={{fontSize: "1.5rem", color:"#000000"}}>Calidad del aire: BUENA</div>
                            </div>
                        </div>
                        <div className='logo__imagen'>
                            <img src={happy} alt='logo-happy'/>
                        </div>
                    </div>

                    <div className='container__grafico__rangos__tipos__gases__' style={{boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)", borderRadius: "2px 2px 5px 5px"}}>
                        <div className='container__tipos__gases__cai'>
                            {dat.map((gas)=>{
                                return <div key={gas.nombre} onClick={()=>handleOpcion2(gas.nombre)} className={opcion === gas.nombre ? 'seleccionado':''}>{gas.nombre}</div>
                            })}
                        </div>
                        <div className='container__rango__tiempo'>
                            <div className={seleccionado === 0 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(0)}>EN VIVO</div>
                            <div className={seleccionado === 1 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(1)}>DIA</div>
                        </div>
                        <div className='container__grafico'>
                            {Graficar(seleccionado, opcion)}
                        </div>
                    </div>
                </div>
            </div>
    )
}