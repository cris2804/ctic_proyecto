import './css/PopupZoom.css';
import perfil from './images/perfil.png';

export default function PopupZoom(){
    return(
        <div className="container__popup__zoom">
            <div className='container__top'>
                <img src={perfil} alt='imagen-zoom'/>
            </div>
            <div className='container__bottom'>
            Juan Fernando <br></br>
            Pérez del Corral
            </div>
        </div>
    )
}