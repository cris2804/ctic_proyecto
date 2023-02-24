import './css/CalidadAireCTIC.css';

export default function CalidadAireCTIC(){
    return(
        <div>
            <div className='nav-calidad-aire'>
                <ul>
                    <li><a href='#concentracion'>Concentración de gases</a></li>
                    <li><a href='#meteorologico'>Datos Meteorológicos</a></li>
                    <li><a href='#aire'>Aire</a></li>
                </ul>
            </div>
            {/*<div className="container-datos-meteorologicos" id='meteorologico'>
                <div>DATOS METEOROLOGICOS</div>
            </div>*/}
            <div className="container-concentracion-de-gases item" id='concentracion'>
                <div className="titulo-categoria">CONCENTRACIÓN DE GASES</div>
                <div className="container-concentracion-de-gases-ctic">
                    <div className='container-mapa'>
                        <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=73" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                    <div className='container-gauges-ca-ctic'>
                        <div className='indice-calidad-aire'>
                            INDICE DE CALIDAD DE AIRE
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=48" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=16" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=46" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=32" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=44" width="100%" height="100%" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='container-tipos-clasificacion'>
                        <div className='buena'>
                            BUENA
                        </div>
                        <div className='moderada'>
                            MODERADA
                        </div>
                        <div className='insalubres'>
                            INSALUBRES
                        </div>
                        <div className='insalubre'>  
                            INSALUBRE
                        </div>
                        <div className='muy-insalubre'>
                            MUY INSALUBRE
                        </div>
                        <div className='peligroso'>
                            PELIGROSO
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-aire item" id='aire'>
                <div className='titulo-categoria'>AIRE</div>
                <div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=10" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=12" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=20" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=34" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=65" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=40" width="450" height="200" frameborder="0"></iframe></div>
                </div>
            </div>
        </div>
    )
}