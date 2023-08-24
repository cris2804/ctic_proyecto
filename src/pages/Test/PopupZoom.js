import './PopupZoom.css';

export default function PopupZoom({perfil, nombres}){
    return(
        <div className="container__popup__zoom">
            <div className='container__top'>
                <img src={perfil} alt='imagen-zoom'/>
            </div>
            <div className='container__bottom'>
                {nombres}
            </div>
        </div>
    )
}