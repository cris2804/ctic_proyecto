import "./css/Ayuda.css";

export default function Detalles(props) {
  return (
    <div className="container__detalles">
      <div className="container__titulo__detalles">AYUDA</div>
      <div className="container__subtitulo">Leyenda</div>
      <div className="container__parrafo">
        Al mostrar un contaminante superpuesto en el mapa, éste muestra el valor
        más reciente de las ubicaciones. Para visualizar la gama de datos en el
        mapa, cada contaminante se visualiza en una escala basada en intervalos
        comunes de 6 niveles. Por ejemplo, la escala de PM2,5 se divide en los
        siguientes valores:
      </div>

      <div className="container__lista">
        <ul type="">
          <li>Bien: 0 - 50</li>
          <li>Moderado: 51 - 100</li>
          <li>Perjudicial para grupos sensibles: 101 - 150</li>
          <li>Perjudicial: 151 - 200</li>
          <li>Muy Perjudicial: 201 - 300</li>
          <li>Peligroso: 301 - 500</li>
        </ul>
      </div>

      <div className="container__parrafo">
        Esta escala refleja fielmente los niveles de concentración utilizados
        para calcular el índice de calidad del aire (ICA).
      </div>

      <div className="container__btn__mas__detalles">
        <div className="container__btn2">
          <a href="faq-calidad-de-aire">MÁS DETALLES</a>
        </div>
      </div>
    </div>
  );
}
