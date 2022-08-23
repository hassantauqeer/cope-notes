import './App.css'
import * as React from 'react'
import TopBar from './components/AppBar/TopBar'
import Button from '@mui/material/Button'
import SideBar from './components/Drawer/SideBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Register from './pages/Login'
import Message from './pages/Message'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <div>
        <TopBar />
      </div>
      <div sm={{ p: '50px' }}>
        <div style={{ height: '100vh', display: 'flex' }}>
          <SideBar />
          <div
            style={{
              display: 'flex',
              alignItems: 'start',
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <h1 style={{ color: '#1976D2' }}>Welcome to Message App</h1>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/message" element={<Message />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
