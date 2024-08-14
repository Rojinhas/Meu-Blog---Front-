import Home from './pagina/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pagina/login/Login';
import Cadastro from './pagina/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <div className='min-h-[80vh]'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  </AuthProvider>

);
}
export default App;