import './css/Popup.css';
import perfil from './images/perfil.png';

export default function PopupZoom({firstname, lastname}){
    return(
        <div className="container__popup">
            <div className='container__top2'>
                <img src={perfil} alt='ima-perfil'/>
            </div>
            <div className='container__bottom2'>
            {firstname} <br></br>
            {lastname}
            </div>
        </div>
    )
}