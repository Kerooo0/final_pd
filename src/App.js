//importamos ruteos
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg'; 

//importamos los componentes
import './App.css'; // Importamos el archivo de estilos
import Inicio from './Componentes/Inicio'; // Importamos el componente Inicio
import Sobre_nosotros from './Componentes/Sobre_nosotros'; // Importamos el componente Inicio
import Contacto from './Componentes/Contacto'; // Importamos el componente Inicio


function App() {
  return (
    /* Pagina de Inicio*/
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <h1><Link to="/">Tell me about You</Link></h1>
              </li>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/Sobre_nosotros">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/Contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='Sobre_nosotros' element={<Sobre_nosotros />}></Route>

          <Route path='/' element={<Inicio />}></Route>

          <Route path='Contacto' element={<Contacto />}></Route>

        </Routes>
      </div>

    </Router>

  );

}

export default App;
