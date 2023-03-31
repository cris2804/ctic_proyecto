import './css/FaqCAE.css';
import React, {useState} from 'react';
//import NavBarText from '../components/NavBarText'

const dataCollection = [
  {
    question: '¿Cómo se puede acceder a la Plataforma Beegons?',
    answer: 'Beegons provides a REST API for programmatic access of the entire data set. Bulk data downloads are also available via Amazon Web Services S3 object storage downloads. OpenAQ also provides an interactive web application for browsing and searching the database from a graphical user interface.'
  }, {
    question: '¿Qué tipos de datos ingiere Beegons?',
    answer: 'Beegons ingests ambient air quality data measurements from ground-level stations. Data must be ‘raw’ and reported in physical concentrations on their originating site. Data cannot be shared in an ‘Air Quality Index’ or equivalent format. Data must be at the ‘station-level,’ associable with geographic coordinates, not aggregated into a higher (e.g., city) level. Data should be from measurements averaged between 10 minutes and 24 hours.'
  }, {
    question: '¿Qué contaminantes están disponibles en Beegons?',
    answer: 'The Beegons database currently ingests the following pollutant data, with a focus on those in bold.'
  }, {
    question: '¿Cuál es la licencia de datos en Beegons?',
    answer: 'Air quality data is factual in nature, and in some jurisdictions may not be subject to copyright or other protections limiting its use or distribution. However, in some jurisdictions, copyright and/or laws and regulations may apply to some of the data on the OpenAQ platform.'
  }, {
    question: '¿Qué contaminantes están disponibles en Beegons?',
    answer: 'When you use Beegons and its tools to access air quality data, we request attributions both to the original data provider and OpenAQ whenever the original data provider is known. Suggested citations:'
  }, {
    question: '¿Cuál es la licencia de datos en Beegons?',
    answer: 'Links to our training resources can be found in: linktr.ee/openaq . Contact us if you would like to host an OpenAQ training (due to limited capacity, we prioritize larger, mission-aligned projects).'
  }, 
];

export default function Accordion(){
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return(
    <>
    {/* <div className='help-content'> */}
    {/*<div className='nav__main'>
      <NavBarText/>
    </div>*/}
    <div className="container">
        <div>
          {/* <span className="accordion__title">Frequently asked questions</span> */}
          <h1 className='gradient-title'>Respondamos algunas de tus preguntas sobre la plataforma “Calidad de aire en exteriores"</h1>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle">-</span> : <span className="horizental">+</span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}