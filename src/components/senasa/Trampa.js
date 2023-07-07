import "./Trampa.css"

function Trampa({nombre, cantidad, color}){

    return(
        <div className="container__component__senasa" style={{background: `${color}`}}>
            <div>{nombre}</div>
            <div>{cantidad}</div>
        </div>
    )
}

export default Trampa