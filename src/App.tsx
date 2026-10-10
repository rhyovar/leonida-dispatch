import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MobileTabBar from './components/MobileTabBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LeonidaMap from './pages/LeonidaMap'
import Cast from './pages/Cast'
import Planner from './pages/Planner'
import Media from './pages/Media'

export default function App() {
  return (
    <div className="min-h-screen bg-ink pb-16 sm:pb-0">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<LeonidaMap />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  )
}
