import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import AppBody from './components/AppBody'
import Chat from './components/Chat'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  )
}

export default App
