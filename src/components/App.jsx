import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from '../pages/Home.jsx'
import ThemeButton from '../components/ThemeButton.jsx'
import Header from '../components/Header.jsx'

/**
 * App.jsx
 * 
 * Este archivo define el componente App, que es el componente principal de la aplicación.
 * 
 * Importaciones:
 * - '../css/App.css': Archivo CSS que contiene los estilos globales de la aplicación.
 * - 'leaflet/dist/leaflet.css': Archivo CSS que contiene los estilos para los mapas de Leaflet.
 * - 'bootstrap/dist/css/bootstrap.min.css': Archivo CSS que contiene los estilos de Bootstrap.
 * - 'bootstrap/dist/js/bootstrap.bundle.min.js': Archivo JS que contiene los scripts de Bootstrap.
 * - Header: Componente que representa el encabezado de la página.
 * - Home: Componente que representa la página principal de la aplicación.
 * - MenuButton: Componente que representa el botón del menú lateral.
 * - SideMenu: Componente que representa el menú lateral.
 * - ThemeButton: Componente que representa el botón de cambio de tema.
 * 
 * Funcionalidad:
 * - App: Componente principal que renderiza la página Home.
 *   - Planea añadir un React Router en el futuro.
 * - El componente Header muestra el título y subtítulo de la página.
 * - El componente MenuButton muestra un botón para abrir el menú lateral.
 * - El componente SideMenu muestra un menú lateral con opciones de navegación.
 * - El componente ThemeButton muestra un botón para cambiar el tema de la aplicación.
 * - El componente Home contiene el contenido principal de la aplicación.
 * 
 */

const App = () => {

  return (
    <>
      {/* Planeo añadir un React Router */}
      <ThemeButton />
      <Header title='Gallardo7761 (a.k.a Jose)' subtitle='Estudiante de 3º de Ingeniería de Computadores @ ETSII US' />
      <Home />
    </>
  );
}

export default App;
