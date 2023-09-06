import React,{useState} from 'react'
import TablaPersonalizada from '../../components/TablaPersonalizada'
import FormLogin from '../../components/FormLogin';

import "./Proyectos.css";
import { Button } from '@mui/material';

const columns = [
    {id:"nombre",label:"Nombre"},
    {id:"apellido",label:"Apellido"},
    {id:"proyectos",label:"Proyectos"},
    {id:"cargo",label:"Cargo"}
]

export default function UsuariosSC() {
    const [usuarios,setUsuarios] = useState([]);
    const [cantidad,setCantidad] = useState(10);
    const [logged,setLogged] = useState(false);
    const changePage = (page) =>{
        //getData(page+1, perPage);
    }
    const changePerPage = (rowPerPage) =>{
        //getData(1,rowPerPage);
    }
  return (
    <div className="contenedor-proyectos">
        
        <div>
            <TablaPersonalizada
                rows= {usuarios}
                cols={columns}
                cantidad ={cantidad}
                changePage={changePage}
                changePerPage={changePerPage}
                search = {false}
            />
        </div>
        <div className='contener-second-col'>
            {!logged?<>
            <h1> ¿Eres adminisrador?</h1>
            <FormLogin/>
            </>:
            <>
                <div className='perfil-img'></div>
                <h2> Bienvenido Usuario Logeado</h2>
                <Button>Añadir Integrante</Button>
            </>}
        </div>
        <div className='title-proyectos'>Integrantes Smartcity</div>
    </div>
  )
}
