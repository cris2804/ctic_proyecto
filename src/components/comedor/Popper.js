import React from 'react'
import Card from '../Card'
import {formatTimestamp} from './PeticionesComedor';
export default function Popper({value,type,time,idb}) {
  return (
    <div  style={{background: "#9AD64D",padding:'10px',borderRadius:'10px'}}>
        <div style={{textAlign:'center'}}><strong>Sensor {idb}</strong></div>
        <div >{type}: {value}</div>
        <div>Time: {formatTimestamp(time)}</div>
        {/*<div>Zona: Buena</div>*/}
    </div>
  )
}
