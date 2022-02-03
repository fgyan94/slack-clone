import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { selectRoomId } from '../../app/features/appSlice'

import ChatInput from '../ChatInput'

import * as S from './styles'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { collection, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../../database/firebase'
import Message from '../Message'

function Chat() {
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(roomId && doc(db, 'rooms', roomId))

  const [roomMessages, loading] = useCollection(
    roomId &&
      query(
        collection(db, 'rooms', roomId, 'messages'),
        orderBy('timestamp', 'asc')
      )
  )

  const chatRef = useRef(null)

  useEffect(() => {
    if (roomId && !loading && chatRef && roomDetails && roomMessages) {
      console.log('ENTROU NO USE EFFECT')
      chatRef?.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [roomId, loading, roomDetails, roomMessages])

  return (
    <S.ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <S.ChatHeader>
            <S.ChatHeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </S.ChatHeaderLeft>

            <S.ChatHeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </S.ChatHeaderRight>
          </S.ChatHeader>

          <S.ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc?.data()
              console.log('DOC DATA', doc?.data())

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <S.ChatBottom ref={chatRef} />
          </S.ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </S.ChatContainer>
  )
}

export default Chat
