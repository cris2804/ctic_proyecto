


export default function Clima({obtenerNombre, id, data, unidaddv}){


    return(
        <div
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 10px 10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f3f7fb",
                paddingBottom: "25px",
                paddingTop: "25px",
                borderRadius: "2px 2px 0px 0px",
              }}
            >
              <div
                style={{
                  color: "#198CFF",
                  fontSize: "15px",
                  fontWeight: "500",
                  paddingBottom: "4px",
                  marginLeft: "10px",
                }}
              >
                CLIMA
              </div>
              <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                ¿Cuál es el clima actual en {obtenerNombre(id)}?
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0px 0px 10px 10px",
                paddingBottom: "30px",
              }}
            >
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>TEMPERATURA</div>
                <div style={{ fontWeight: "500" }}>{data ? Math.round(data.temperatura_2) : ""} ªC</div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>VELOCIDAD DEL VIENTO</div>
                <div style={{ fontWeight: "500" }}>{data ? data.velocidad_del_viento : ""} km/h</div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>DIRECCIÓN DEL VIENTO</div>
                <div style={{ fontWeight: "500" }}>{data ? unidaddv(data.direccion_del_viento) : ""} </div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>INTENSIDAD DE SONIDO</div>
                <div style={{ fontWeight: "500" }}>{data ? data.intensidad_de_sonido : ""}</div>
              </div>
            </div>
          </div>
    )
}