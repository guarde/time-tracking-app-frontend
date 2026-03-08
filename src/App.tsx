import './App.css'
import { Routes, Route } from "react-router";

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/u/:username" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
