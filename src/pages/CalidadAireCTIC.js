import './css/CalidadAireCTIC.css';
import logov2 from './images/logo_version_grafana.png'

export default function CalidadAireCTIC(){
    return(
        <div>
            <div className='nav-calidad-aire'>
                <div className='nav-superior'>
                    <div><a href='/'><img src={logov2} alt='imagen-logo'/></a></div>
                    <div className='container-tematica'>Calidad de Aire - CTIC</div>
                </div>
                <ul>
                    <li><a href='#concentracion'>Concentración de gases</a></li>
                    <li><a href='#aire'>Aire</a></li>
                    <li><a href='#meteorologico'>Datos Meteorológicos</a></li>
                </ul>
            </div>
            {/*<div className="container-datos-meteorologicos" id='meteorologico'>
                <div>DATOS METEOROLOGICOS</div>
            </div>*/}
            <div className="container-concentracion-de-gases item" id='concentracion'>
                <div className="titulo-categoria">CONCENTRACIÓN DE GASES</div>
                <div className="container-concentracion-de-gases-ctic">
                    <div className='container-mapa'>
                        {/*<iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=73" width="100%" height="100%" frameborder="0"></iframe>*/}
                        <iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=73" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                    <div className='container-gauges-ca-ctic'>
                        <div className='indice-calidad-aire'>
                            ÍNDICE DE CALIDAD DEL AIRE
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=48" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=48" width="100%" height="100%" frameborder="0"></iframe>*/}
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=16" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=16" width="100%" height="100%" frameborder="0"></iframe>*/}
                            </div>
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=46" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=46" width="100%" height="100%" frameborder="0"></iframe>*/}
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=18" width="100%" height="100%" frameborder="0"></iframe>*/}
                            </div>
                        </div>
                        <div className='container-2-gauges'>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=32" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=32" width="100%" height="100%" frameborder="0"></iframe>*/}
                            </div>
                            <div>
                                <iframe src="http://181.176.48.200:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=44" width="100%" height="100%" frameborder="0"></iframe>
                                {/*<iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=44" width="100%" height="100%" frameborder="0"></iframe>*/}
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
                <div className='container-historico-cg'>
                    <iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=22" width="100%" height="100%" frameborder="0"></iframe>
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
                {/*<div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=10" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=12" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=20" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=34" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=65" width="450" height="200" frameborder="0"></iframe></div>
                <div><iframe src="http://192.168.52.232:3000/d-solo/r3ZhIQ74cd/calidad-de-aire-ctic?orgId=1&panelId=40" width="450" height="200" frameborder="0"></iframe></div>*/}
                </div>
            </div>
            <div className="container-datos-meteorologicos item" id='meteorologico'>
                <div className='titulo-categoria'>DATOS METEOROLÓGICOS</div>
            </div>
        </div>
    )
}