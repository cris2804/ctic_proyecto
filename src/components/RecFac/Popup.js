import './Popup.css';
export default function PopupZoom({nombres, perfil, hora}){
    return(
        <div>
            <div className='container__top2'>
                <img src={perfil} alt='ima-perfil'/>
            </div>
            <div className='container__bottom2'>
                <div>{nombres}</div>
                <div>Hora: {hora}</div>
            </div>
        </div>
    )
}