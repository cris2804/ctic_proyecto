import React from 'react'
import TablaPersonalizada from '../../components/TablaPersonalizada'
import { useState } from 'react';
const columns = [
    {id:"alumno", label:"Alumno"},
    {id:"desayuno", label:"Desayuno"},
    
]


export default function Test() {
    const [registros,setRegistros] = useState([]);
    const [cantidad,setCantidad] = useState(10);
    const [perPage,setPerPage] = useState(10);

    const changePage = (page) =>{
        //getData(page+1, perPage);
    }
    const changePerPage = (rowPerPage) =>{
        //getData(1,rowPerPage);
    }
  return (
    <div>
        <TablaPersonalizada
            rows={registros} 
            cols = {columns}
            cantidad={cantidad}
            changePage={changePage}
            changePerPage={changePerPage}
        />
    </div>
  )
}
