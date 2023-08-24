import './Popup.css';
export default function PopupZoom({nombres, perfil}){
    return(
        <div>
            <div className='container__top2'>
                <img src={perfil} alt='ima-perfil'/>
            </div>
            <div className='container__bottom2'>
                {nombres}
            </div>
        </div>
    )
}