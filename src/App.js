import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import University from './pages/University';

function App() {
  return (
    <div className="container-all">
      {/*<div className='container-main'>*/}
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>  
            <Route path='/universidad-nacional-de-ingenieria' element={<University/>}/> 
          </Routes>
        </Router>       
      {/*</div>*/}
    </div>
  );
}

export default App;