import logo from './images/logosc.png'
import './css/Dashboard.css'

export default function Dashboard(){
    return( 
    <div>
        <div className='container-main'>
            <div className='container-logo-time-aforo-dashboard'>
                <img src={logo} alt="logo"/>
                <iframe className='container-time' src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695098200&to=1675781498200&panelId=4" frameborder="0"></iframe>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695935699&to=1675782335699&panelId=10" width="450" height="200" frameborder="0"></iframe>*/}
                <div className='container-dashboard'>
                    <div className='container-dashboard-title'>DASHBOARD</div>
                    <a href='/universidad-nacional-de-ingenieria'>Universidad Nacional de Ingeniería</a>
                </div>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695144106&to=1675781544106&panelId=12" width="70%" height="200" frameborder="0"></iframe>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696627797&to=1675783027797&panelId=14" width="70%" height="200" frameborder="0"></iframe>
            </div>
            <div className='container-map-dashboard'>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696115267&to=1675782515267&panelId=2" width="100%" height="900" frameborder="0"></iframe>
            </div>
        </div>
    </div>);
}