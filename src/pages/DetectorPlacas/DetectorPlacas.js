import "./DetectorPlacas.css"
import imagen from "./carro-movimiento.png"
import placa from "./placa.jpg"

export default function DetectorPlacas(){

    return(
        <div className="container__main__all__dp">
            <div className="container__left__dp">
                 <div className="container__main__hi__dp">
                    <div className="container__hora__img_dp">
                        <div>12:45:20 PM</div>
                        <img src={placa} alt=""/>
                        <div>ÚLTIMO CARRO</div>
                    </div>
                </div>
                <div className="container__cantidad"> 
                    <div className="container__is__dp">
                        <div>INGRESARON</div>
                        <div>620</div>
                    </div>
                    <div className="container__is__dp">
                        <div>SALIERON</div>
                        <div>20</div>
                    </div>
                </div>
            </div>
            <div className="container__right__dp">
                <div className="container__main__form__dp">
                    <div className="carro__movimiento">
                        <div className="carro">
                            <img src={imagen} alt="" />
                        </div>
                    </div>
                    <div className="container__form__dp">
                        <div className="container__title__form__dp">Registrar Carro</div>
                        <div>
                            <div>Placa</div>
                            <input className="input"/>
                        </div>
                        <div>
                            <div>Nombre del conductor</div>
                            <input className="input"/>
                        </div>
                        <div>
                            <div>Dni</div>
                            <input className="input"/>
                        </div>
                        <div>
                            <div>Condición</div>
                            <div className="container__condicion">
                                <div className="opcion"><input type="radio"/> Autorizado</div>
                                <div className="opcion"><input type="radio"/> Visitante</div>
                            </div>
                        </div>
                        <div>
                            <div>Destino</div>
                            <input className="input"/>
                        </div>
                        <div className="container__btn__registrar__dp">REGISTRAR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}