import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { FillCapacity } from './components/buttonModal/FillCapacity.js';
import WaterTank from './components/tanque/WaterTank';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FillCapacity/>}/>
          <Route path='/tank' element={<WaterTank/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
