import './css/CargaViralCTIC.css';
import logosc from './images/logosc.png'
import NavBarText from '../components/NavBarText'

export default function CargaViralCTIC(){
    return(
        <div>
            <div className="container-nav">
                <div className='nav__main' style={{marginBottom: "10px"}}>
                    <NavBarText/>
                </div>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675784962255&to=1675871362255&panelId=6" width="100%" height="200" frameborder="0"></iframe>*/}
            </div>
            <div className='container-map-gauge'>
                <div className='container-map'>
                    {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=2" width="100%" height="1420" frameborder="0"></iframe>*/}
                    <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=2" width="100%" height="1420" frameborder="0"></iframe>
                </div>
                <div className='container-gauges'>
                    <div className='gauges'>
                        <div className='co2'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=4" width="100%" height="250" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=4" width="100%" height="250" frameborder="0"></iframe>
                        </div>
                        <div className='humedad-temperatura'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=21" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=23" width="100%" height="200" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=21" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=23" width="100%" height="200" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className='gauges'>
                        <div className='co2'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=8" width="100%" height="250" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=8" width="100%" height="250" frameborder="0"></iframe>
                        </div>
                        <div className='humedad-temperatura'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=25" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=37" width="100%" height="200" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=25" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=37" width="100%" height="200" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className='gauges'>
                        <div className='co2'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=10" width="100%" height="250" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=10" width="100%" height="250" frameborder="0"></iframe>
                        </div>
                        <div className='humedad-temperatura'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=27" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=33" width="100%" height="200" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=10" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=33" width="100%" height="200" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className='gauges'>
                        <div className='co2'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=12" width="100%" height="250" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=12" width="100%" height="250" frameborder="0"></iframe>
                        </div>
                        <div className='humedad-temperatura'>
                            {/*<iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=29" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=39" width="100%" height="200" frameborder="0"></iframe>*/}
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=29" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://192.168.52.232:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=39" width="100%" height="200" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className='gauges'>
                        <div className='co2'>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=14" width="100%" height="250" frameborder="0"></iframe>
                        </div>
                        <div className='humedad-temperatura'>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=31" width="100%" height="200" frameborder="0"></iframe>
                            <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=35" width="100%" height="200" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className='gauges'>
                        <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&from=1675785885527&to=1675872285527&panelId=16" width="100%" height="99.6%" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div className='container-historico-1'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=18" width="100%" height="450" frameborder="0"></iframe>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=19" width="100%" height="450" frameborder="0"></iframe>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=41" width="100%" height="450" frameborder="0"></iframe>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=43" width="100%" height="450" frameborder="0"></iframe>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=45" width="100%" height="450" frameborder="0"></iframe>
            </div>
            <div className='container-historico'>
                <iframe src="http://181.176.48.200:3000/d-solo/2-sxtM24k/carga-viral-ctic?orgId=1&panelId=47" width="100%" height="450" frameborder="0"></iframe>
            </div>
        </div>
    )
}