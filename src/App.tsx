import './App.css'
import { Routes, Route, useLocation } from "react-router";

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/u/:username" element={<ProfilePage />} />
    </Routes>
  )
}

export default App
