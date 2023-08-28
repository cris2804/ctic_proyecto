import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import Calendar from "react-calendar"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import Select from "./Select"
import { MdLocationPin } from "react-icons/md"


export default function Descargar({id, handleChange,toggleCalendar1,toggleCalendar2,date1,showCalendar1,showCalendar2,onChange1,date2,onChange2,options,selectedValue,handleSelectChange,checkboxes,handleCheckboxChange,handleMostrar}){

    return(
        <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 10px 10px",
            }}
          >
            <div
              className="container__detalle__descargar"
              style={{
                backgroundColor: "#f3f7fb",
                paddingTop: "30px",
                paddingBottom: "30px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <div style={{ color: "#198CFF", paddingBottom: "4px" }}>
                DESCARGAR DATOS (CSV)
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  paddingRight: "40px",
                }}
              >
                {" "}
                Aqui podra descargar distintos datos de nuestra plataforma,
                podra escoger el rango de fechas y los sensores a analizar.
              </div>
            </div>
            <div
              className="selector__de__lugar__cai"
              style={{ marginTop: "20px" }}
            >
              <div className="container__icon__ubi__ofi">
                {" "}
                <MdLocationPin style={{ fontSize: "2rem", color: "#1cbacc" }} />
                Ubicación Actual:{" "}
              </div>
              <select
                value={"/calidad-del-aire-uni/exteriores?id="+id}
                onChange={handleChange}
                className="container__select__paginas__cai"
              >
                <option value="/calidad-del-aire-uni/exteriores?id=ctic">
                  CTIC
                </option>
                <option value="/calidad-del-aire-uni/exteriores?id=puerta 3">
                  Puerta 3
                </option>
                <option value="/calidad-del-aire-uni/exteriores?id=puerta 5">
                  Puerta 5
                </option>
              </select>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500" }}
            >
              <div>Fecha Inicial: </div>
              <div>
                <button
                  onClick={toggleCalendar1}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date1.toLocaleDateString()}</div>
                </button>
                {showCalendar1 && (
                  <Calendar onChange={onChange1} value={date1} />
                )}
              </div>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500" }}
            >
              <div>Fecha Final: </div>
              <div>
                <button
                  onClick={toggleCalendar2}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date2.toLocaleDateString()}</div>
                </button>
                {showCalendar2 && (
                  <Calendar onChange={onChange2} value={date2} />
                )}
              </div>
            </div>
            <div className="container__eh">
              <div>Evolución:</div>
              <Select
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
              />
            </div>
            <div
              className="container__detalle__descargar2"
              style={{ paddingTop: "25px" }}
            >
              <div>NO₂ μg/m³</div>
              <input
                type="checkbox"
                name="NO2"
                checked={checkboxes.NO2}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>O₃ μg/m³</div>
              <input
                type="checkbox"
                name="O3"
                checked={checkboxes.O3}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>H₂S μg/m³</div>
              <input
                type="checkbox"
                name="H2S"
                checked={checkboxes.H2S}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>CO μg/m³</div>
              <input
                type="checkbox"
                name="CO"
                checked={checkboxes.CO}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>PM 10 μg/m³</div>
              <input
                type="checkbox"
                name="PM10"
                checked={checkboxes.PM10}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>PM 2.5 μg/m³</div>
              <input
                type="checkbox"
                name="PM25"
                checked={checkboxes.PM25}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>Humedad μg/m³</div>
              <input
                type="checkbox"
                name="Humedad"
                checked={checkboxes.Humedad}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>Viento μg/m³</div>
              <input
                type="checkbox"
                name="Viento"
                checked={checkboxes.Viento}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div
              className="container__detalle__descargar__btn"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            >
              <button
                onClick={handleMostrar}
                style={{
                  backgroundColor: "#7EDAE5",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#2086D8",
                  fontSize: "20px",
                  fontWeight: "500",
                  borderColor: "#2086D8",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                  cursor: "pointer",
                }}
              >
                Descargar CSV&nbsp;&nbsp; <CloudDownloadIcon />
              </button>
            </div>
          </div>
    )
}