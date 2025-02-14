import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './Navbar'

function App() {
  return (
    <>
      <header>
        <h1 className='text-center p-4'>You&apos;ve found my website, welcome!</h1>
        <Navbar />
      </header>
      <main>

      </main>
      <footer className='p-4 fixed-bottom border-top bg-light align-items-center'>
        <p className='text-center m-0'>Made with 🫀 by Gallardo7761. I&apos;m the owner of <a href='https://miarma.net/'>miarma.net</a> btw.</p>
      </footer>
    </>
  )
}

export default App
