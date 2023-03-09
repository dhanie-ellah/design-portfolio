import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import CoolStuff from './Components/CoolStuff';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coolStuff' element={<CoolStuff/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
