import { useState } from "react";
import { Ica } from "../../assets/Ica"


export default function Estado({happy}){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return(
        <div
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
            }}
          >
            <div
              className="container__estado__ca"
              style={{ backgroundColor: "#9AD64D" }}
            >
              <div className="container__valor__tipo">
                <div
                  className="container__valor"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ backgroundColor: "#8ac241" }}
                >
                  40
                </div>
                <div className="container__indice__tipo">
                  <div className="indice" style={{ fontSize: "16px" }}>
                    ÍNDICE ICA EN VIVO
                  </div>
                  <div
                    className="tipo"
                    style={{ fontSize: "30px", fontWeight: "500" }}
                  >
                    Perjudicial Para Grupos Sensibles
                  </div>
                </div>
              </div>
              <div className="logo__imagen">
                <img src={happy} alt="logo-happy" />
              </div>
              <div
                className={
                  isHovered
                    ? "container__detalles__ica"
                    : "container__detalles__ica2"
                }
              >
                {Ica.map((element, i) => {
                  return (
                    <div className="container__ica__rango__nombre" key={i}>
                      <div style={{ background: element.color }}>
                        {element.rango}
                      </div>
                      <div>{element.nombre}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
    )
}