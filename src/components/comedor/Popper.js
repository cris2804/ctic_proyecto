import React from 'react'
import Card from '../Card'
import {formatTimestamp} from './PeticionesComedor';

export default function Popper({value,type,time,idb}) {
  return (
    <div  style={{background: "#fff",padding:'10px',border: 'solid 2px #000'}}>
        <div style={{textAlign:'center'}}><strong>Sensor {idb}</strong></div>
        <div >CO₂: {value}</div> {/*<div >{type}: {value}</div> */}
        <div>Tiempo: {formatTimestamp(time)}</div>
        {/*<div>Zona: Buena</div>*/}
    </div>
  )
}
