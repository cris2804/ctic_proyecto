import * as React from 'react';
import './css/NavBarText.css';
import logosc from '../pages/images/logosc.png'
import personas from '../pages/images/blue_persons.png'

export default function NavPage() {

  return (
    <div className='container-navbar'>
        <div className='container-logo-footer'><img src={logosc} alt='logo-imagen' href='/'></img></div>
        <div className='container-secciones-nb'>
          <a href='./calidad-de-aire-ctic'>Calidad de Aire</a>
          <a href='./carga-viral-CTIC'>Carga Viral</a>
          <a href='./smart-parking'>Smart Parking</a>
          <div className='containter-cuenta-personas'>
            <div className='container-cuenta-personas-top'>
                <div><img src={personas} alt='persona'></img></div>
                <div>25</div>
            </div>
            <div className='container-cuenta-personas-bottom'>
                <span>CTIC</span>
            </div>
          </div>
          <div className='containter-cuenta-personas'>
            <div className='container-cuenta-personas-top'>
                <div><img src={personas} alt='persona'></img></div>
                <div>25</div>
            </div>
            <div className='container-cuenta-personas-bottom'>
            <span>LAB. SMART CITY</span>
            </div>
          </div>
          
          {/* <a href='./contactanos' className='container-contactanos-nb'>LOGIN</a> */}
        </div>
      
    </div>
  )
}
