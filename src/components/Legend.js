import {data} from '../assets/data'

export default function Legend(){
    return(
        <>
            {data.map((element) =>{
                return(<div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        {element.tipo}
                    </div>
                    <div>
                        < img src={element.logo} alt="imagen icono" style={{width:"25px"}}/>
                    </div>
                    </div>)
            })}
        </>
    )
}