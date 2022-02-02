import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import * as S from './styles'

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <S.HeaderAvatar
        // TODO: Add onClick
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
