import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../database/firebase'
import { enterRoom } from '../../app/features/appSlice'

import * as S from './styles'
import { useDispatch } from 'react-redux'

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch()

  const addChannel = async () => {
    const channelName = prompt('Enter the channel name')

    if (!!channelName) {
      await addDoc(collection(db, 'rooms'), {
        name: channelName
      })
        .then((data) => {
          console.log('DATA', { ...data })
        })
        .catch((err) =>
          console.log('ERROR ON CREATE A NEW CHANNEL', { ...err })
        )
    }
  }

  const selectChannel = () => {
    if (!!id) {
      console.log('ENTROU AQUI PAPAI', id)
      dispatch(enterRoom({ roomId: id }))
    }
  }

  return (
    <S.SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize={'small'} style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <S.SidebarOptionChannel>
          <span>#</span> {title}
        </S.SidebarOptionChannel>
      )}
    </S.SidebarOptionContainer>
  )
}

export default SidebarOption
