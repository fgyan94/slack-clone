import React from 'react'
import { Button } from '@mui/material'

import { auth, provider } from '../../database/firebase'

import * as S from './styles'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const signIn = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
  }

  return (
    <S.LoginContainer>
      <S.LoginInnerContainer>
        <img
          src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'}
          alt={''}
        />
        <h1>Sign In to Slack-Clone</h1>
        <p>slack.clone.com</p>

        <Button onClick={signIn}>Sign with Google</Button>
      </S.LoginInnerContainer>
    </S.LoginContainer>
  )
}

export default Login
