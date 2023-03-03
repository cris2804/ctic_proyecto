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
    </div>
  </div>
  );
}

export default Main;