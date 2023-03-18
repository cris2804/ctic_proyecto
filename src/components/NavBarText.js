import * as React from 'react';
import './css/NavBarText.css';
/* import logosc from '../pages/images/logosc.png' */
import logosc from '../pages/images/logosc.svg';
import personas from '../pages/images/blue_persons.png'

export default function NavPage() {

  return (
    <div className='container-navbar'>
        <div className='container-logo-footer'><a href='/'><img src={logosc} alt='logo-imagen'></img></a></div>
        <div className='container-secciones-nb'>
          <div className='dropdown'>
            <button class="dropbtn">Calidad de Aire</button>
              <div class="dropdown-content">
                <a href="./calidad-de-aire-ctic">Calidad de Aire (CTIC)</a>
                <a href="/calidad-de-aire-puerta-3">Calidad de Aire (Puerta 3)</a>
                <a href="/calidad-de-aire-puerta-5">Calidad de Aire (Puerta 5)</a>
              </div>
          </div>
          <div className='dropdown'>
          <button class="dropbtn">Carga Viral</button>
            <div class="dropdown-content">
              <a href="./carga-viral-CTIC">Carga Viral (CTIC)</a>
              <a href="/carga-viral-comedor-universitario">Carga Viral (Comedor Universitario)</a>
            </div>
          </div>
          <div className='menu'><a href='./smart-parking'>Smart Parking</a>
            {/* <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div> */}
          </div>
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
