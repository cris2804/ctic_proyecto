import "./css/Bienvenida.css";

export default function Bienvenida(){


    return (
        <div className="container__bienvenida">
            <img src="https://e.rpp-noticias.io/xlarge/2023/01/18/475647_1376757.jpg" alt="" />
            <div className="container__titulo__bienvenida">CTIC</div>
            {/*<div className="container__introduccion"></div>*/}



            <a href="/calidad-del-aire-uni" className="container__boton__bienvenida">Calidad del Aire</a>
        </div>
    )
}