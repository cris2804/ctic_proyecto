import "./css/Controlaforo.css";
import { IoIosPeople } from "react-icons/io";

export default function Controlaforo() {
  return (
    <div className="container__main__control__aforo">
      <div className="container__main__aforo">
        <div className="container__max__aforo container__aforo">
          <div className="titulo__aforo">Aforo Máximo</div>
          <div className="cantidad__max">
            <IoIosPeople style={{ color: "#D38C00" }} />
            <div className="valor__aforo__max">150</div>
          </div>
          <div className="container__gradient__rango">
            <div className="gradient__div"></div>
            <div className="rango__valores">
              <span>0</span>
              <span>150</span>
            </div>
          </div>
        </div>

        <div className="container__imagen__ctic container__aforo">
          <img
            src="https://www.ctic.uni.edu.pe/wp-content/uploads/2020/10/foto-ctic-uni.jpg"
            alt="imagen-ctic"
          />
        </div>

        <div className="container__actual__aforo container__aforo">
          <div className="titulo__aforo">Aforo Actual</div>
          <div className="cantidad__actual">
            <IoIosPeople style={{ color: "#D38C00" }} />
            <div className="valor__aforo__actual">35</div>
            <div className="valor__porcentaje__aforo">23.33%</div>
          </div>
          <div className="container__gradient__rango__ac">
            <div className="gradient__div">
                <div style={{height: '3vh', width:'76.67%', background:'#EAEAEA',position: 'absolute', right:'0'}}></div>
            </div>
            <div className="rango__valores" style={{width: '23.33%'}}>
              <span>0</span>
              <span>35</span>
            </div>
          </div>
        </div>

        <div className="container__historico__aforo container__aforo">
          <div className="titulo__aforo">Histórico</div>
        </div>

        <div className="circulo">
          <div className="control">
            Control De Aforo<br></br> CTIC
          </div>
          <div className="icon">
            <IoIosPeople />
          </div>
        </div>
        
      </div>
    </div>
  );
}
