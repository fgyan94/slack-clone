import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../database/firebase'

import * as S from './styles'
import { signOut } from 'firebase/auth'

function Header() {
  const [user] = useAuthState(auth)

  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <S.HeaderAvatar
          onClick={() => signOut(auth)}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </S.HeaderLeft>
      <S.HeaderSearch>
        <SearchIcon />
        <input type={'text'} placeholder={'search'} />
      </S.HeaderSearch>
      <S.HeaderRight>
        <HelpOutlineIcon />
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}

export default Header
