import './css/Popup.css';

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
}