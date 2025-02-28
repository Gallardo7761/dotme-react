import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from '../pages/Home.jsx'
import ThemeButton from './ThemeButton.jsx'
import Header from './Header.jsx'
import Link from './Link.jsx'
import NavBar from './NavBar.jsx'

const App = () => {

  return (
    <>
      <ThemeButton />
      <Header title='Gallardo7761 (a.k.a Jose)' shortTitle='Gallardo7761' subtitle='Estudiante de 3º de Ingeniería de Computadores @ ETSII US' />
      <NavBar>
        <Link to={"/inicio"} className='me-2' isNavbar>
          Inicio
        </Link>
        <Link to={"https://github.com/Gallardo7761?tab=repositories"} className='me-2' isNavbar>
          Proyectos
        </Link>
      </NavBar>
      <Home />
    </>
  );
}

export default App;
