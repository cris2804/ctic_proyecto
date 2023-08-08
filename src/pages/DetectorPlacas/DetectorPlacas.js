import "./DetectorPlacas.css"
import imagen from "./carro.png"
import placa from "./placa.jpg"

export default function DetectorPlacas(){

    return(
        <div className="container__main__all__dp">
            <div className="container__left__dp">
                <div className="container__img"><img src={imagen} /></div>
                <div className="container__cantidad"> 
                    <div className="container__is__dp">
                        <div>Ingreso</div>
                        <div>620</div>
                    </div>
                    <div className="container__is__dp">
                        <div>Salida</div>
                        <div>20</div>
                    </div>
                </div>
            </div>
            <div className="container__right__dp">
                <div className="container__main__hi__dp">
                    {/*<div className="container__ultimo">Último carro ingresado (registrado)</div>*/}
                    <div className="container__hora__img_dp">
                        <div>12:45:20 PM</div>
                        <img src={placa}/>
                        <div>Último carro que ingreso</div>
                    </div>
                </div>
                <div className="container__main__form__dp">
                    <div className="container__form__dp">
                        <div className="container__title__form__dp">Registrar Carro</div>
                        <div>
                            <div>Placa</div>
                            <input />
                        </div>
                        <div>
                            <div>Nombre del conductor</div>
                            <input />
                        </div>
                        <div>
                            <div>Dni</div>
                            <input />
                        </div>
                        <div className="container__btn__registrar__dp">REGISTRAR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}