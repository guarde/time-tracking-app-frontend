import './App.css'
import { Routes, Route } from "react-router";

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile'
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/u/:username" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
