
import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home from './pages/home';
import  Login from './pages/login';
import  Register from './pages/register';
import  Panel from './pages/panel';
import TopMenu from './components/topmenu';

function App() {
  return (
    <div className="App">

    <TopMenu />

  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/panel" element={<Panel />} />
  </Routes>
     
    </div>
  );
}

export default App;
