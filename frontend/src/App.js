import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Join from "./components/Join";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './bars/navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Join />} />
         <Route path="/sign-up" element={<Register />} />
         <Route path="/sign-in" element={<Login />} />
         <Route path="/chat" element={<Chat />} />
       </Routes>
    </Router>
  )
}
export default App
