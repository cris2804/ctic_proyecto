import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import DetalleCA from "./pages/DetalleCA";
import FaqCAI from "./pages/FaqCAI";
import FaqCAE from "./pages/FaqCAE";
import Grafico3 from "./components/Grafico3";
import DetalleCAI from "./pages/DetalleCAI";
import ComedorCAI from "./pages/ComedorCAI";
import Landing from "./pages/Landing";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import icono from "./favicon.ico";
import { SiWindicss } from "react-icons/si";
import { MdCo2 } from "react-icons/md";
import ReconocimientoFacial from "./pages/ReconocimientoFacial";
import CanvasComedor from "./components/comedor/CanvasComedor";
import Controlaforo from "./pages/Controlaforo";
import Cuentaspersonas from "./pages/Cuentapersonas";
import Senasa from "./pages/Senasa";
import Bienvenida from "./pages/Bienvenida";
import CalidadAgua from "./pages/CalidadAgua";
import ControlAforo from "./pages/CuentaPersonas/ControlAforo";
import Metaverso from "./pages/Metaverso";

function App() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(0);

  const Menus = [
    { title: "Dashboard", spacing: true, icon: <RiDashboardFill />, link: "/calidad-del-aire-uni" },
    {
      title: "Calidad del aire Interiores",
      icon: <MdCo2 />,
      spacing: true,
      submenu: true,
      submenuItems: [
        {
          title: "CTIC",
          link: "/calidad-del-aire-interiores-ctic?id=Oficina de Administración",
        },
        {
          title: "Comedor",
          link: "/calidad-del-aire-interiores-comedor-universitario?id=sensor 1",
        },
      ],
    },
    {
      title: "Calidad del aire Exteriores",
      icon: <SiWindicss />,
      submenu: true,
      submenuItems: [
        { title: "CTIC", link: "/calidad-del-aire-exteriores?id=ctic" },
        { title: "Puerta 3", link: "/calidad-del-aire-exteriores?id=puerta 3" },
        { title: "Puerta 5", link: "/calidad-del-aire-exteriores?id=puerta 5" },
      ],
    },
  ];

  return (
    <div className={`flex duration-300 ${open ? "pl-72" : "pl-20"}`}>
      <div
        className={`sidebar bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300  relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
          rounded-full absolute -right-3 top-20 border
          border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <img
            src={icono}
            alt="icono"
            style={{ height: "30px" }}
            className={`bg-amber-300 p-1 rounded block float-left mr-2 duration-700 ${
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
                    <a href={menu.link}>{menu.icon ? menu.icon : <RiDashboardFill />}</a>
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                    onClick={() => setSubmenuOpen(index)}
                  >
                    {menu.submenu ? (
                      menu.title
                    ) : (
                      <a
                        href={menu.link}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {menu.title}
                      </a>
                    )}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen === index && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(index)}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen === index && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => {
                      return (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center gap-x-4
                      cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                        >
                          <a
                            href={submenuItem.link}
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            {submenuItem.title}
                          </a>
                        </li>
                      );
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
            <Route path="/" element={<Landing/>}/>

            <Route path="/calidad-del-aire-uni" element={<Main />} />
            
            <Route path="/calidad-del-aire-exteriores" element={<DetalleCA />}/>
            
            <Route path="/calidad-del-aire-interiores-ctic" element={<DetalleCAI />}/>
            <Route path="/calidad-del-aire-interiores-comedor-universitario" element={<ComedorCAI />}/>
            
            <Route path="/faq-carga-viral" element={<FaqCAI />} />
            <Route path="/faq-calidad-de-aire" element={<FaqCAE />} />
            
            <Route path="/cuenta-personas" element={<ReconocimientoFacial/>} />
            <Route path="/control-aforo" element={<Controlaforo/>}/>
            <Route path="/reconocimiento-facial" element={<Cuentaspersonas/>} />

            <Route path="/senasa" element={<Senasa/>} />
            <Route path="/calidad-del-aire" element={<Bienvenida/>}/>
            <Route path="/calidad-del-agua" element={<CalidadAgua/>}/>


            <Route path="/temporal" element={<CanvasComedor/>}/>
            <Route path="/detalle-carga-viral" element={<DetalleCA />} />
            <Route path="/grafico-semana" element={<Grafico3 />} />
            <Route path="/control-aforo-v2" element={<ControlAforo/>} />
            <Route path="/metaverso" element={<Metaverso/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
