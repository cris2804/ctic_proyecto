import './css/DetallesI.css';
import {obtenerhora} from './obtenerhora';
import {obtenerfecha} from './obtenerfecha'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const data = [
    {
        "nombre": "ADMINISTRACIÓN",
        "contenido": "Este es el area de adminitración donde veremos los datos de la calidad de aire en interiores",
    },
    {
        "nombre": "LABORATORIO SMARTCITY",
        "contenido": "Este es el area de smart city donde veremos los datos de la calidad del aire en interiores"
    },
    {
        "nombre": "CALIDAD UNIVERSITARIA",
        "contenido": "Este es el area de calidad universitaria donde veremos los datos de la calidad del aire en interiores",
    }
]

const nombrelugar = (e) =>{
    if(e === "cv-comedor") return "Comedor Universitario";
    else if(e === "cv-ctic") return "CTIC";
}

export default function DetallesI({id}){
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleButtonClick = () => {
    console.log(inputValue);
  }

  //acordeon
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected ===  i){
        setSelected(null)
    }else{
        setSelected(i)
    }
  }

  
return(
    <div className='container__main__detalles__i'>
        <div className='container__titulo'>{nombrelugar(id)}</div>
        <div className="container__ciudad__pais">Lima, Perú</div>
        <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
        <div className='container__search__'>
            <input type="text" value={inputValue} onChange={handleInputChange}/> 
            <SearchOutlinedIcon className='icon__search' onClick={handleButtonClick}/>
        </div>
        <div className='accordion'>
            {
                data.map((item, i)=>{
                   return <div className='item' key={i}>
                        <div className='nombre' onClick={() => toggle(i)}>
                            <h4>{item.nombre}</h4>
                            <span>{selected === i ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</span>
                        </div>
                        <div className={selected === i ? 'contenido show' : 'contenido'}>
                            {item.contenido}
                        </div>
                    </div>
                })
            }
        </div>
        
    </div>
    )
}