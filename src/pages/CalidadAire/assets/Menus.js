import { SiWindicss } from "react-icons/si";
import { MdCo2 } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";

export const Menus = [
    { title: "Dashboard", spacing: true, icon: <RiDashboardFill />, link: "/calidad-del-aire-uni" },
    {
      title: "Calidad del aire Interiores",
      icon: <MdCo2 />,
      spacing: true,
      submenu: true,
      submenuItems: [
        {
          title: "CTIC",
          link: "/calidad-del-aire-uni/interiores-ctic?id=Oficina de Administración",
        },
        {
          title: "Comedor",
          link: "/calidad-del-aire-uni/interiores-comedor?id=sensor 1",
        },
      ],
    },
    {
      title: "Calidad del aire Exteriores",
      icon: <SiWindicss />,
      submenu: true,
      submenuItems: [
        { title: "CTIC", link: "/calidad-del-aire-uni/exteriores?id=ctic" },
        { title: "Puerta 3", link: "/calidad-del-aire-uni/exteriores?id=puerta 3" },
        { title: "Puerta 5", link: "/calidad-del-aire-uni/exteriores?id=puerta 5" },
      ],
    },
];