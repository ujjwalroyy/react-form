import './App.css';
import Display from './component/Display';
import Form from './component/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path="/display" element={<Display/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
