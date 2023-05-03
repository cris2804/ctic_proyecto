import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import University from "./pages/University";
import CargaViralCTIC from "./pages/CargaViralCTIC";
import CargaViralComedor from "./pages/CargaViralComedor";
import CalidadAireCTIC from "./pages/CalidadAireCTIC";
import CalidadAirePuerta5 from "./pages/CalidadAirePuerta5";
import CalidadAirePuerta3 from "./pages/CalidadAirePuerta3";
import SmartParking from "./pages/SmartParking";
import Main from "./pages/Main";
import DetalleCA from "./pages/DetalleCA";
import FaqCAI from "./pages/FaqCAI";
import FaqCAE from "./pages/FaqCAE";
import Grafico3 from "./components/Grafico3";
import DetalleCAI from "./pages/DetalleCAI";
//import CSV from "./pages/CSV";

import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import icono from "./favicon.ico";
import {SiWindicss} from 'react-icons/si';
import {MdCo2} from 'react-icons/md';

function App() {

  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(0);

  const Menus = [
    { title: "Dashboard", spacing: true, icon: <RiDashboardFill/> },
    {
      title: "Calidad del aire Interiores",
      icon: <SiWindicss/>,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "CTIC" },
        { title: "Comedor" },
      ],
    },
    {
      title: "Calidad del aire Exteriores",
      icon: <MdCo2/>,
      submenu: true,
      submenuItems: [
        { title: "CTIC" },
        { title: "Puerta 3" },
        { title: "Puerta 5"},
      ],
    },
  ];

  return (
    <div className={`flex duration-300 ${open ? "pl-72":"pl-20" }`}>
      <div
        className={`sidebar bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300  relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
          rounded-full absolute -right-3 top-9 border
          border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <img
            src={icono}
            alt="icono"
            style={{height: "30px"}}
            className={`bg-amber-300 p-1 rounded cursor-pointer block float-left mr-2 duration-700 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            SmartCity
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => {
            return (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                  ${menu.spacing ? "mt-9" : "mt-2"}`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                    onClick={()=>setSubmenuOpen(index)}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown className={`${submenuOpen===index && "rotate-180"}`} onClick={()=>setSubmenuOpen(index)}/>
                  )}
                </li>
                {menu.submenu && submenuOpen===index && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => {
                      return <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4
                      cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                        {submenuItem.title}
                      </li>
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div className={open ? "container__main__" : "container__main__nx"}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/calidad-del-aire-exteriores"
              element={<DetalleCA />}
            />
            <Route
              path="/calidad-del-aire-interiores-ctic"
              element={<DetalleCAI />}
            />
            <Route path="/faq-carga-viral" element={<FaqCAI />} />
            <Route path="/faq-calidad-de-aire" element={<FaqCAE />} />
            <Route path="/detalle-carga-viral" element={<DetalleCA />} />
            <Route path="/grafico-semana" element={<Grafico3 />} />
            {/*<Route path="/csv" element={<CSV />} /> */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/universidad-nacional-de-ingenieria"
              element={<University />}
            />
            <Route path="/carga-viral-CTIC" element={<CargaViralCTIC />} />
            <Route
              path="/carga-viral-comedor-universitario"
              element={<CargaViralComedor />}
            />
            <Route path="/calidad-de-aire-ctic" element={<CalidadAireCTIC />} />
            <Route
              path="/calidad-de-aire-puerta-5"
              element={<CalidadAirePuerta5 />}
            />
            <Route
              path="/calidad-de-aire-puerta-3"
              element={<CalidadAirePuerta3 />}
            />
            <Route path="/smart-parking" element={<SmartParking />} />
            <Route path="/localización/101" element={<SmartParking />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
