import "./css/CalidadAgua.css";


export default function CalidadAgua(){


    return(
        <div className="container__calidad__agua">
            <div className="titulo__calidad__agua">
                Calidad del Agua
            </div>

            <div className="container__datos__tpht">
                <div className="container__tpht">
                    <div>
                        Temperatura
                    </div>
                    <div className="valor">
                        20 °C
                    </div>
                </div>
                <div className="container__tpht">
                    <div>
                        Ph
                    </div>
                    <div className="valor">
                        7.0
                    </div>
                </div>
                <div className="container__tpht">
                    <div>
                        Turbidez
                    </div>
                    <div className="valor">
                        40 JTU
                    </div>
                </div>
            </div>
        </div>
    )
}