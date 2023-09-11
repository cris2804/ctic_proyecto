import React from 'react'
import { useContextAlert } from './AlertasContextProvider'
import SensorsIcon from '@mui/icons-material/Sensors';



import "./AlertasPopup.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function PopupAlerta() {
    const {sensores} = useContextAlert();
    const [cantInactivos,setCantInactivos] = useState(0);
    const getSensoresInactivos = () =>{
        const inactivos = sensores.filter(s =>{
            return s.estado == 2
        })
        setCantInactivos(inactivos.length);
    }
    useEffect(()=>{
        if(sensores.length < 1) return;
        getSensoresInactivos();
    },[sensores])
    const toSensor = () =>{
        
    }
    return (
        <div className="popup-alerta">
            {cantInactivos >0 && 
            <Link to="/alerta-sensor">
                <div 
                onClick={toSensor}
                className='container-icon-sensor'>
                    
                    <SensorsIcon sx={{fontSize:"55px"}}/>
                    <div className='cantidad-alert-icon'>{cantInactivos}</div>
                    
                </div>
            </Link>
                
            }
        </div>
        
    )
}
