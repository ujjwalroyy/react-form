import './App.css';
import Display from './component/Display';
import Form from './component/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/display" element={<Display/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
https://docs.google.com/spreadsheets/d/1x1xpocLcH8Dtg1oUl7a0DbU1NS-Wd-Halxp_FiiUBAM/edit?usp=sharing
  );
}

export default App;
