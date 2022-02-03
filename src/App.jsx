import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import Login from './components/Login'
import Chat from './components/Chat'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { auth } from './database/firebase'

import * as S from './styles'
import Spinner from 'react-spinkit'

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <S.AppLoadingContainer>
        <S.AppLoadingContents>
          <img
            src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'}
            alt={''}
          />
          <Spinner
            name={'ball-spin-fade-loader'}
            color={'purple'}
            fadeIn={'none'}
          />
        </S.AppLoadingContents>
      </S.AppLoadingContainer>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <S.AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />} />
              </Routes>
            </S.AppBody>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
