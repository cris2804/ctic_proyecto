import "./css/Header.css"
import logo from "../img/logo_version_grafana.png"
import { MdLocationPin } from "react-icons/md"
import { Link } from 'react-router-dom'

export default function Header({ lugar }){


    return(
        <div className="container__header__senasa">
            <Link to="/senasa" className="link">
                <img src={logo} alt="logo"/>    
            </Link>
            <div>SENASA</div>
            <div>
                <MdLocationPin className="ubicacion__senasa"/> 
                {lugar}
            </div>
        </div>
    )
}