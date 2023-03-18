import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function CalidadAirePuerta3(){
    const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  }

    return(
        <div className='container__rango__fechas__seleccionar'>
            <div>DE: </div>
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
            <div>HASTA: </div>
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
            <button className='container__btn__aceptar' onClick={handleMostrar}>ACEPTAR</button>
            {/*showCalendar && (
            <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
            )*/}
      </div>
    )
}