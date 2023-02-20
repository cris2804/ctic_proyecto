import logo from './images/logosc.png'
import './css/University.css'
import logouni from './images/logouni.png'

export default function University(){
    return(<>
        <div className="container-nav">
            <div className='container-image'>
                <a href='/'><img src={logo} alt='logo'/> </a>
            </div>
            <div className='container-ruta-university'>
                <a href='/universidad-nacional-de-ingenieria'>UNIVERSIDAD NACIONAL DE INGENIERIA</a>
            </div>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675784962255&to=1675871362255&panelId=6" width="100%" height="200" frameborder="0"></iframe>*/}
        </div>
        <div className="container-university-main">
            <div className='container-logo-map'>
                {/*<a href='/'><img src={logo} alt="logo"/></a>*/}
                <iframe src="http://181.176.48.200:3000/d-solo/7bhq8tc4z/universidad-nacional-de-ingenieria?orgId=1&from=1675781192877&to=1675867592877&panelId=14" width="100%" height="800" frameborder="0"></iframe>
            </div>
            <div className='container-name-university-dash'>
                <div className='container-name-logo-university'>
                    <img src={logouni} alt='imagen-logo'/>
                    <div className='container-name-university'>
                        <div>UNIVERSIDAD</div>
                        <div>NACIONAL DE</div>
                        <div>INGENIERIA</div>
                    </div>
                </div>
                <div className='container-dash'>
                    <div className='container-title-dash-2'>CARGA VIRAL</div>
                    <a href='/carga-viral-CTIC'>Carga Viral (CTIC)</a>
                    <a href='/carga-viral-comedor-universitario'>Carga Viral (Comedor Universitario)</a>
                </div>
            </div>
        </div>
        </>);
}