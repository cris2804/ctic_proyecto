import logo from './images/logosc.png'
import logov2 from './images/logo_version_grafana.png'
import './css/Dashboard.css'

export default function Dashboard(){
    return( 
    <div>
        <div className='container-main'>
            <div className='container-logo-time-aforo-dashboard'>
                <img src={logov2} alt="logov2"/>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=4" width="100%" height="17%" frameborder="0"></iframe>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695935699&to=1675782335699&panelId=10" width="450" height="200" frameborder="0"></iframe>*/}
                <div className='container-dashboard'>
                    <div className='container-dashboard-title'>DASHBOARD</div>
                    <a href='/universidad-nacional-de-ingenieria'>Universidad Nacional de Ingeniería</a>
                </div>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=12" width="100%" height="20%" frameborder="0"></iframe>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&panelId=14" width="100%" height="20%" frameborder="0"></iframe>
            </div>
            <div className='container-map-dashboard'>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696115267&to=1675782515267&panelId=2" width="100%" height="900" frameborder="0"></iframe>
            </div>
        </div>
    </div>);
}