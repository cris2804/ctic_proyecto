import logo from './images/logosc.png'

export default function Dashboard(){
    return( 
    <div>
        <div style={{display:'flex', position:'relative'}}>
            <div style={{display:'flex', flexDirection:'column', width:'30%', alignItems:'center'}}>
                <img src={logo} alt="logo" style={{width:'70%'}}/>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695098200&to=1675781498200&panelId=4" width="450" height="200" frameborder="0"></iframe>
                {/*<iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695935699&to=1675782335699&panelId=10" width="450" height="200" frameborder="0"></iframe>*/}
                <div style={{height:'100px'}}>
                    <a href='/universidad-nacional-de-ingenieria' style={{textDecoration:'none', color:'black'}}>Universidad Nacional de Ingeniería</a>
                </div>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675695144106&to=1675781544106&panelId=12" width="450" height="200" frameborder="0"></iframe>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696627797&to=1675783027797&panelId=14" width="450" height="200" frameborder="0"></iframe>
            </div>
            <div style={{width:'70%', position:'relative'}}>
                <iframe src="http://181.176.48.200:3000/d-solo/XS78ahc4k/home?orgId=1&refresh=1s&from=1675696115267&to=1675782515267&panelId=2" width="100%" height="900" frameborder="0"></iframe>
            </div>
        </div>
        
    </div>);
}