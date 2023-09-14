import "./css/Trampa.css"

function Trampa({nombre, cantidad, color, selected}){

    return(
        <div className={selected === 2 ? "container__component__senasa2" : "container__component__senasa"} style={{background: `${color}`}}>
            <div>{"Trampa "+nombre}</div>
            <div>{cantidad}</div>
        </div>
    )
}

export default Trampa