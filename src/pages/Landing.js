import "./css/Landing.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsTiktok } from "react-icons/bs";
import logouni from "./images/logouni.png";
import Fade from "react-reveal/Fade";
import fondosc from "./images/fondosc.jpg"
import burra from "./images/burra.jpeg"

const smartcampus = [
  {
    titulo: "Calidad Del Aire",
    descripcion:
      "Plataforma web de la calidad del aire en interiores y exteriores de la UNI.",
    link: "/calidad-del-aire",
    blank: true,
    imagen:
      "https://images.pexels.com/photos/1528361/pexels-photo-1528361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Cuenta Personas",
    descripcion: "Control de la cantidad de personas dentro del ambiente de CTIC.",
    link: "/control-aforo",
    blank: true,
    imagen: "https://www.mobotix.com/sites/default/files/styles/facebook/public/2020-06/backontrack_1_930x550.jpg?h=c4a9cdb7&itok=p09sYf8W"
  },
  {
    titulo: "Calidad del Agua",
    descripcion: "Plataforma web para control de la calidad del agua",
    link: "/calidad-del-agua",
    blank: true,
    imagen: "https://diarioresponsable.com/images/CALIDAD_AGUA_DR_copy.jpg"
  },
  {
    titulo: "Metaverso",
    descripcion: "Aquí encontraremos una virtualización de la UNI, divierte",
    link: "/metaverso",
    blank: false,
    imagen: "https://cdn.pixabay.com/photo/2022/06/09/08/44/metaverse-7252038_1280.jpg"
  },
  {
    titulo: "Comedor Universitario",
    descripcion: "Página web del menú, balance nutricional y para sacar turno.",
    link: "/#",
    blank: false,
    imagen:
      "https://1.bp.blogspot.com/-LJ1jyLSwlnU/XfPW8rk0U2I/AAAAAAAAPGc/s87z5i3bvIMnSu1ocH1N4jUdwg8-9ML_wCNcBGAsYHQ/s1600/IMG_9696.CR2",
  },
  {
    titulo: "Transporte UNI",
    descripcion:
      "Conozca las rutas y saqué su turno para trasladarse a su vivienda o a la UNI.",
    link: "/#",
    imagen: burra,
  },
  {
    titulo: "Laboratorios De Investigación",
    descripcion: "Conozca los diferentes laboratorios que hay en CTIC.",
    link: "/#",
    blank: false,
    imagen:
      "https://images.pexels.com/photos/8438993/pexels-photo-8438993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "App Smart Campus",
    descripcion: "Aplicación del smart campus de la UNI",
    link: "/#",
    blank: false,
    imagen:
      "https://res.cloudinary.com/slee-dw/image/upload/v1597941457/meta-tutoriales_vbnc37.png",
  },
  {
    titulo: "Bolsa De Trabajo",
    descripcion: "Página web de registro de ofertas laborales",
    link: "/#",
    blank: false,
    imagen: "https://www.ceupe.pe/images/easyblog_articles/296/720.jpg",
  },
  {
    titulo: "Biblioteca",
    descripcion: "Página web para ver el aforo en la biblioteca",
    link: "/#",
    blank: false,
    imagen:
      "https://4.bp.blogspot.com/-JsmbNBRtZtQ/UMdkaE3az4I/AAAAAAAAKjE/nPJKeu8ZoOw/s1600/B1.jpg",
  },
  {
    titulo: "Correo UNI",
    descripcion: "gestión de correos de estudiantes",
    link: "/#",
    imagen:
      "data:image/png;base64,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",
  },
];

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
            const tiempo = 1500 + 100*(index+1)
            return (
              <>
                <Fade right delay={tiempo}>
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
