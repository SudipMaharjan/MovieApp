import './css/App.css'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import Home from './pages/Home'
import { Routes, Route } from'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/movieContext' 
import Watchlist from './pages/Watchlist'

function App() {

  return (
    <MovieProvider className="App">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="/movieDetails" element={<MovieDetails/>} />"
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
