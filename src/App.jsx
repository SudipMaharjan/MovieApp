import './css/App.css'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import Home from './pages/Home'
import { Routes, Route } from'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/movieDetails" element={<MovieDetails/>} />"
        </Routes>
      </main>
    </div>
  );
}

export default App
