import Home from './Home';
import './App.css';
import Report from './report';
import Research from './research';
import Mission from './Mission';
import Joinus from './Joinus';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Joinus" element={<Joinus/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="/research" element={<Research/>}/>
            <Route path="/Mission" element={<Mission/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
