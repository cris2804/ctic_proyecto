import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

export default function Ica({estadoCA, setI, rangos}){


    return(
        <div className="container__ica">
          <div className="container__ica_body">
            <div className="container__ica_legend_section">
              <div className="map-legend-title">
                <span class="type-subtitle-3 text-smoke-120">
                  {" "}
                  {estadoCA ? "INCA" : "CO2 (ppm)"}{" "}
                </span>
              </div>
              <div className="map-legend-bar">
                {rangos.map((rang, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        flex: "1 1 0%",
                        borderRight: `solid 1px #dedede`,
                        backgroundImage: `linear-gradient(to right, ${rang.color1}, ${rang.color2})`,
                      }}
                    ></div>
                  );
                })}
              </div>
              <div className="map-legend-bar-labels">
                {rangos.map((rang, i) => {
                  return (
                    <div
                      key={i}
                      class="type-body-4"
                      style={{
                        flex: "1 1 0%",
                        position: "relative",
                        height: "20px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          height: "100%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {rang.valor}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="container__ica_help_section"
              onClick={() => setI(2)}
            >
              <button class="button-reset">
                <span class="legend-help">
                  <HelpOutlineIcon />
                </span>
                <span> Ayuda </span>
              </button>
            </div>
          </div>
        </div>
    )
}