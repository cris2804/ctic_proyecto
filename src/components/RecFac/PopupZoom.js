import './PopupZoom.css';

export default function PopupZoom({perfil, nombres, hora}){
    return(
        <div className="container__popup__zoom">
            <div className='container__top'>
                <img src={perfil} alt='imagen-zoom'/>
            </div>
            <div className='container__bottom'>
                <div className='bienvenido'>BIENVENIDO</div>
                <div>{nombres}</div>
                <div className='container__hora'>Hora: {hora}</div>
            </div>
        </div>
    )
}