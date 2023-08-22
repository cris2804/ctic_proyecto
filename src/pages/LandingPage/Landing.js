import "./Landing.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsTiktok } from "react-icons/bs";
import logouni from "./logouni.png";
import Fade from "react-reveal/Fade";
import fondosc from "./fondosc.jpg"
import {smartcampus} from "./proyectos";


export default function Landing() {
  return (
    <div className="container__all__landing">
      <div className="container__landing">
        <div className="container__fondo">
          <img
            src={fondosc}
            alt="imagen uni"
            className="imagen__fondo"
          />
          <div className="container__header">
            <Fade left delay={200}>
              <img src={logouni} alt="logo uni" />
            </Fade>
            <div className="container__nombre__uni">
              <Fade right delay={200}>
                UNIVERSIDAD NACIONAL DE INGENIERIA
              </Fade>
            </div>
          </div>
          <div className="container__titulo">
            <span>
              <Fade bottom delay={500}>
                SMART CAMPUS
              </Fade>
            </span>
            <p>
              <Fade bottom delay={800}>
                Innovación educativa en un entorno conectado. Descubre un
              </Fade>{" "}
              <Fade bottom delay={1100}>
                campus inteligente, donde la tecnología redefine la experiencia
              </Fade>{" "}
              <Fade bottom delay={1200}>
                universitaria. Bienvenido al futuro de la educación.
              </Fade>
            </p>
          </div>
        </div>

        <div className="container__pregunta">
          <Fade top delay={1500}>
            ¿Qué encontrarás en el Smart Campus?
          </Fade>
        </div>

        <div className="contenedor">
          {smartcampus.map((sc, index) => {
            const tiempo = 100*(index)
            return (
              <>
                <Fade delay={tiempo}>
                  <a
                    href={sc.link}
                    target={sc.blank ? `_blank` : "_self"}
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img src={sc.imagen} alt="imagen-ca" />
                      <div className="capa">
                        <div><h3>{sc.titulo}</h3></div>
                        <div><p>{sc.descripcion}</p></div>
                        
                      </div>
                    </figure>
                  </a>
                </Fade>
              </>
            );
          })}
        </div>
      </div>
      <div className="container__footer">
        <div className="container__logos">
          <li>
            <a href="/#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="/#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="/#">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="/#">
              <BsTiktok />
            </a>
          </li>
        </div>
        <div className="container__texto__">
          Realizado por Smart City <br></br>
          CTIC - UNI
        </div>
      </div>
    </div>
  );
}
