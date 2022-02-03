import React from 'react'

import * as S from './styles'

function Message({ message, timestamp, user, userImage }) {
  const date = timestamp
    ? new Date(timestamp?.toDate()).toLocaleString()
    : 'sending...'

  return (
    <S.MessageContainer>
      <img src={userImage} alt={''} />

      <S.MessageInfo>
        <h4>
          {user} <span>{date}</span>
        </h4>
        <p>{message} </p>
      </S.MessageInfo>
    </S.MessageContainer>
  )
}

export default Message
