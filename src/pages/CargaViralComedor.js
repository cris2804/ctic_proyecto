import './css/CargaViralComedor.css';
//import logosc from './images/logosc.png'
import NavBarText from '../components/NavBarText'

export default function CargaViralComedor(){
    return(
        <div>
            <div className="container-nav">
                <div className='nav__main' style={{marginBottom: "10px"}}>
                    <NavBarText/>
                </div>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675784962255&to=1675871362255&panelId=6" width="100%" height="200" frameborder="0"></iframe>*/}
            </div>
            <div className='container-main-comedor'>
                <div className='container-map-gauges'>
                    <div className='container-map-gauges-superior'>
                        <div className='container-map'>
                            <iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=18" width="100%" height="400" frameborder="0" title='mapa-comedor'></iframe>
                        </div>
                        <div className='gauges-superior'>
                            <div className='gauges-1'>
                                <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=16" width="100%" height="200" frameborder="0" title='gauge-1'></iframe></div>
                                <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=19" width="100%" height="200" frameborder="0" title='gauge-2'></iframe></div>
                            </div>
                            <div className='gauges-2'>
                                <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=14" width="100%" height="200" frameborder="0" title='gauge-3'></iframe></div>
                                <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=13" width="100%" height="200" frameborder="0" title='gauge-4'></iframe></div>
                            </div>
                        </div>
                    </div>
                    <div className='gauges-inferior'>
                        <div className='gauges-3'>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=15" width="100%" height="200" frameborder="0" title='gauge-5'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=20" width="100%" height="200" frameborder="0" title='gauge-6'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=22" width="100%" height="200" frameborder="0" title='gauge-7'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=23" width="100%" height="200" frameborder="0" title='gauge-8'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=24" width="100%" height="200" frameborder="0" title='gauge-9'></iframe></div>
                        </div>
                        <div className='gauges-4'>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=25" width="100%" height="200" frameborder="0" title='gauge-10'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=26" width="100%" height="200" frameborder="0" title='gauge-11'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=27" width="100%" height="200" frameborder="0" title='gauge-12'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=28" width="100%" height="200" frameborder="0" title='gauge-13'></iframe></div>
                            <div><iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=29" width="100%" height="200" frameborder="0" title='gauge-14'></iframe></div>
                        </div>
                    </div>
                </div>
                <div className='container-alertas'>
                    <iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=38" width="100%" height="200" frameborder="0" title='alerta'></iframe>
                </div>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/fzvvo6vVk/carga-viral-comedor-universitario?orgId=1&refresh=5s&panelId=47" width="100%" height="300" frameborder="0" title='historico'></iframe>
            </div>
        </div>
    )
}