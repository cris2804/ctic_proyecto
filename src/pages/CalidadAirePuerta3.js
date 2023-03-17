import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function CalidadAirePuerta3(){
    const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  }

    return(
        <div>
            <Calendar
            onChange={onChange}
            value={date}
            />

            <div>
            Fecha seleccionada: {date.toLocaleDateString()}
            </div>
        </div>
    )
}