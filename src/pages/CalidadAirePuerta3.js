import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import './css/CalidadAirePuerta3.css';

export default function CalidadAirePuerta3(){
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

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

    return(
        <div className='container__rango__fechas__seleccionar'>
            <div>De: </div>
            <div>
                <button onClick={toggleCalendar1} className='container__btn__calendar'>
                    {date1.toLocaleDateString()}
                </button>
                {showCalendar1 && (
                <Calendar
                    onChange={onChange1}
                    value={date1}
                />
                )}
            </div>
            <div>Hasta: </div>
            <div>
                <button onClick={toggleCalendar2} className='container__btn__calendar'>
                    {date2.toLocaleDateString()}
                </button>
                {showCalendar2 && (
                <Calendar
                    onChange={onChange2}
                    value={date2}
                />
                )}
            </div>
            <button className='container__btn__aceptar' onClick={handleMostrar}>Aceptar</button>
            {/*showCalendar && (
            <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
            )*/}
      </div>
    )
}