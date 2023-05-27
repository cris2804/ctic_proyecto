import React from 'react'
import Card from '../Card'
import {formatTimestamp} from './PeticionesComedor';
export default function Popper({value,type,time}) {
  return (
    <div className="container__card" style={{background: "#9AD64D"}}>
        <div >{type}: {value}</div>
        <div>time: {formatTimestamp(time)}</div>
        {/*<div>Zona: Buena</div>*/}
    </div>
  )
}
