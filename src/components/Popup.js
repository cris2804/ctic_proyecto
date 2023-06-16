/*import './css/Popup.css';

export default function PopupZoom({firstname, lastname, perfil}){
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
}*/

import './css/Popup.css';
import { RiCloseCircleFill } from "react-icons/ri";

export default function PopupZoom({nombres, perfil}){
    return(
        <div className="container__popup">
            <div className='container__top2'>
                <img src={perfil} alt='ima-perfil'/>
            </div>
            <div className='container__bottom2'>
                {nombres}
            </div>
            <div className='container__close'><RiCloseCircleFill className="close"  /></div>
        </div>
    )
}