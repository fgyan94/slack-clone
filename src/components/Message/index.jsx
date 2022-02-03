import React from 'react'

import * as S from './styles'

function Message({message, timestamp, user, userImage}) {
  return (
    <S.MessageContainer>
      <img src={userImage} alt={''} />
      
      <S.MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message} </p>
      </S.MessageInfo>
    </S.MessageContainer>
  )
}

export default Message
