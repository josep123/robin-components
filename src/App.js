
import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home from './pages/home';
import  Login from './pages/login';
import  Register from './pages/register';
import  Panel from './pages/panel';
import  Men from './pages/men';
import Woman from './pages/woman';
import TopMenu from './components/topmenu';
import TOPFooter from './components/topfooter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    <TopMenu />

  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/panel" element={<Panel />} />
  </Routes>

  <TOPFooter />
  <Footer />
     
    </div>
  );
}

export default App;
