import "./CalidadAire.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./Main/Main";
import DetalleCA from "./Exteriores/DetalleCA";
import FaqCAI from "./Interiores/FaqCAI";
import FaqCAE from "./Exteriores/FaqCAE";
import DetalleCAI from "./Interiores/DetalleCAI";
import ComedorCAI from "./Interiores/ComedorCAI";
import { Menus } from "./assets/Menus"
import icono from "./assets/favicon.ico"
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function CalidadAire() {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(0);

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
        
          <Routes>
            
            <Route path="/" element={<Main />} />
            
            <Route path="exteriores" element={<DetalleCA />}/>
            <Route path="exteriores-ayuda" element={<FaqCAE />} />
            
            <Route path="interiores-ctic" element={<DetalleCAI />}/>
            <Route path="interiores-comedor" element={<ComedorCAI />}/>
            <Route path="interiores-ayuda" element={<FaqCAI />} />

          </Routes>
 
      </div>
    </div>
  );
}

export default CalidadAire;
