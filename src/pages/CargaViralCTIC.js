import './css/CargaViralCTIC.css';
import logosc from './images/logosc.png'

export default function CargaViralCTIC(){
    return(
        <div>
            <div className="container-nav">
                <div className='container-image'>
                    <a href='/'><img src={logosc}/> </a>
                </div>
                <div className='container-ruta-university'>
                    <a href='/universidad-nacional-de-ingenieria'>UNIVERSIDAD NACIONAL DE INGENIERIA</a>
                </div>
                <div className='container-ruta-ctic'>
                    CARGA VIRAL(CTIC)
                </div>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675784962255&to=1675871362255&panelId=6" width="100%" height="200" frameborder="0"></iframe>*/}
            </div>
            <div className='container-map-gauge'>
                <div className='container-map'>
                    <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785053624&to=1675871453624&panelId=2" frameborder="0"></iframe>
                </div>
                <div className='container-gauges'>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785157736&to=1675871557736&panelId=4" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785185526&to=1675871585526&panelId=8" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785251207&to=1675871651207&panelId=10" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785264351&to=1675871664351&panelId=12" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785274775&to=1675871674775&panelId=14" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                    <div>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785885527&to=1675872285527&panelId=16" width="100%" height="400" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=18" width="100%" height="450" frameborder="0"></iframe>
            </div>
        </div>
    )
}