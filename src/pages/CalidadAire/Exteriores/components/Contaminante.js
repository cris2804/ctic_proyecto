import { GiWindow } from "react-icons/gi"
import { MdMasks } from "react-icons/md"
import { MdOutlineWindPower } from "react-icons/md"
import { MdOutlineSportsHandball } from "react-icons/md"


export default function Contaminante(){


    return(
        <div className="container__contaminante__principal">
              <div className="container__c__p">
                <div className="container__c__p__cv">
                  <div>Contaminantes</div>
                  <div>PM2.5</div>
                </div>
                <div className="container__c__p__b">
                  <div></div>
                  <div></div>
                </div>
                <div className="container__c__p__cov">
                  <div>Concentración</div>
                  <div>36 ug/m3</div>
                </div>
              </div>
              <div className="container__recomendaciones__salud">
                <div>RECOMENDACIONES DE SALUD</div>
                <div>¿Cómo protegerse de la contaminación del aire?</div>
                <div className="container__recomendacion__logo">
                  <div className="container__2">
                    <div className="container__rel">
                      <MdMasks style={{ color: "orange", fontSize: "3em" }} />
                      <div>
                        Los grupos sensibles deben usar una máscara al aire
                        libre
                      </div>
                    </div>
                    <div className="container__rel">
                      <MdOutlineWindPower
                        style={{ color: "orange", fontSize: "3em" }}
                      />
                      <div>Utilice un purificador de aire</div>
                    </div>
                  </div>
                  <div className="container__2">
                    <div className="container__rel">
                      <GiWindow style={{ color: "orange", fontSize: "3em" }} />
                      <div>
                        Cierra las ventanas para evitar el aire exterior sucio
                      </div>
                    </div>
                    <div className="container__rel">
                      <MdOutlineSportsHandball
                        style={{ color: "orange", fontSize: "3em" }}
                      />
                      <div>Reducir el ejercicio al aire libre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}