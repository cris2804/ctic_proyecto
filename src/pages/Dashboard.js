import logov2 from './images/logo_version_grafana.png'
import './css/Dashboard.css'
import cuentapersonas from './images/cuenta_personas.png'

export default function Dashboard(){
    return( 
    <div>
        <div className='container-main'>
            <div className='container-logo-time-aforo-dashboard'>
                <div className='container-logo-time'>
                    <img src={logov2} alt="logov2"/>
                    {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=4" width="100%" height="17%" frameborder="0"></iframe>*/}
                    <div className='container-time'><iframe src="http://192.168.52.232:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=4" width="100%" height="17%" frameborder="0" title='tiempo'></iframe></div>
                    {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695935699&to=1675782335699&panelId=10" width="450" height="200" frameborder="0"></iframe>*/}
                </div>
                <div className='container-dash-cuenta-personas'>
                    <div className='container-dashboard'>
                        <div className='container-dashboard-title'>Dashboard</div>
                        <a href='/universidad-nacional-de-ingenieria'>Universidad Nacional de Ingeniería</a>
                    </div>
                    {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=12" width="100%" height="20%" frameborder="0"></iframe>
                    <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=14" width="100%" height="20%" frameborder="0"></iframe>*/}
                    <div className='container-2-cuenta-personas'>
                        <div className='container-cuenta-personas'>
                            <div className='cuenta-personas-imagen'>
                                <img src={cuentapersonas} alt='imagen cuenta personas'/>
                            </div>
                            <div className='cuenta-personas-datos'>
                                <div className='cuenta-personas-titulo'>AFORO</div>
                                <div className='cuenta-personas-cantidad'>23</div>
                                <div className='cuenta-personas-lugar'>CTIC</div>
                            </div>
                        </div>
                        <div className='container-cuenta-personas'>
                            <div className='cuenta-personas-imagen'>
                                <img src={cuentapersonas} alt='imagen cuenta personas'/>
                            </div>
                            <div className='cuenta-personas-datos'>
                                <div className='cuenta-personas-titulo'>AFORO</div>
                                <div className='cuenta-personas-cantidad'>12</div>
                                <div className='cuenta-personas-lugar'>Lab. Smart City</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-map-dashboard'>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696115267&to=1675782515267&panelId=2" width="100%" height="100%" frameborder="0"></iframe>*/}
                <iframe src="http://192.168.52.232:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=2" width="100%" height="100%" frameborder="0" title='mapa-dash'></iframe>
            </div>
        </div>
    </div>);
}