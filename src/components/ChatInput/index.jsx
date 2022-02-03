import React, { useState } from 'react'
import { Button } from '@mui/material'
import { collection, serverTimestamp, doc, setDoc } from 'firebase/firestore'
import { db } from '../../database/firebase'

import * as S from './styles'

function ChatInput({ chatRef, channelId, channelName }) {
  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    if (!channelId) {
      return false
    }

    const docMessage = doc(collection(db, 'rooms', channelId, 'messages'))

    setDoc(docMessage, {
      message: message,
      timestamp: serverTimestamp(),
      user: 'Sonny Sangha',
      userImage:
        'https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg'
    })

    setMessage('')
    chatRef?.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <S.ChatInputContainer>
      <form action={''}>
        <input
          placeholder={`Message #${channelName}`}
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <Button hidden type={'submit'} onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </S.ChatInputContainer>
  )
}

export default ChatInput
