import React from 'react';
import TextField from '@mui/material/TextField';
import "./css/Form.css";
import { useState } from 'react';
import { Button } from '@mui/material';
export default function () {
    const [formData,setFormData] = useState({
        nombre:'',
        password:''
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }
    const handleInputForm = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
  return (
    <div className='container-form'>
        <form className='form' onSubmit={handleSubmit}>

        
        <TextField
            
            label="Usuario"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputForm}
        />
        <TextField
            id = "outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"

            name="password"
            value={formData.password}
            onChange={handleInputForm}

        />
       
        <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              
        >Login</Button>
        </form>
    </div>
  )
}
