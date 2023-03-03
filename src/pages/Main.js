import './css/Main.css';
import MapView from '../components/MapView';
//import Legend from '../components/Legend';

function Main() {
  return (
  <div className='container__main'>
    <div className='nav__main'>

    </div>
    <div className='cont container__map'>
      <MapView className='view__map'/>
      {/*<div className='container__leyenda'>
          <Legend/>
  </div>*/}
    <div className='container__ica'>
      <div className='container__ica__'>
        <span>Bueno</span>
        <span>Moderado</span>
        <span>Perjudicial para grupos sensibles</span>
        <span>Perjudicial</span>
        <span>Muy Perjudicial</span>
        <span>Peligroso</span>
      </div>
    </div>
    </div>
  </div>
  );
}

export default Main;