import logov2 from './images/logo_version_grafana.png'
import './css/University.css'
import logouniv2 from './images/logouni_v2.png'

export default function University(){
    return(<div>
        <div className='container-image'>
            <a href='/'><img src={logov2} alt='logov2' height={100}/> </a>
        </div>
            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675784962255&to=1675871362255&panelId=6" width="100%" height="200" frameborder="0"></iframe>*/}
        <div className="container-university-main">
            <div className='container-logo-map'>
                {/*<a href='/'><img src={logo} alt="logo"/></a>*/}
                <iframe src="http://181.176.48.200:3000/d-solo/7bhq8tc4z/universidad-nacional-de-ingenieria?orgId=1&from=1675781192877&to=1675867592877&panelId=14" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <div className='container-name-university-dash'>
                <div className='container-name-logo-university'>
                    <img src={logouniv2} alt='imagen-logo-v2'/>
                </div>
                <div className='container-dash'>
                    <div className='container-title-dash-2'>Carga Viral</div>
                    <a href='/carga-viral-CTIC'>Carga Viral (CTIC)</a>
                    <a href='/carga-viral-comedor-universitario'>Carga Viral (Comedor Universitario)</a>
                </div>
                <div className='container-dash'>
                    <div className='container-title-dash-2'>Calidad de Aire</div>
                    <a href='/calidad-de-aire-ctic'>Calidad de Aire (CTIC)</a>
                    <a href='/calidad-de-aire-puerta-3'>Calidad de Aire (Puerta 3)</a>
                    <a href='/calidad-de-aire-puerta-5'>Calidad de Aire (Puerta 5)</a>
                </div>
                <div className='container-dash'>
                    <div className='container-title-dash-2'>Smart Parking</div>
                    <a href='/smart-parking'>Smart Parking (CTIC)</a>
                </div>
            </div>
        </div>
        </div>);
}