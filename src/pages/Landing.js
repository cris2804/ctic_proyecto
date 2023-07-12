import "./css/Landing.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsTiktok } from "react-icons/bs";
import logouni from "./images/logouni.png";
import Fade from "react-reveal/Fade";

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
    link: "https://www.spatial.io/s/Sergio-Munoz-Suarezs-3D-Room-6475545a8284f96bc422289d?share=4242366686113477634",
    blank: true,
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
    imagen:
      "data:image/jpeg;base64,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",
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
            src="https://2021-3.campusvirtualfim.com/pluginfile.php/1/theme_lambda/slide1image/1682815941/sli01%20%281%29.jpg"
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

        <div class="contenedor">
          {smartcampus.map((sc, index) => {
            const tiempo = 1500 + 200*(index+1)
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
                      <div class="capa">
                        <h3>{sc.titulo}</h3>
                        <p>{sc.descripcion}</p>
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
