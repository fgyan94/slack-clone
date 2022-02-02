import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'

import * as S from './styles'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import SidebarOption from '../SidebarOption'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../database/firebase'

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, 'rooms'))

  const compare = (a, b) => {
    if (a.data().name < b.data().name) {
      return -1
    } else if (a.data().name > b.data().name) {
      return 1
    }

    return 0
  }

  if (!channels || loading) return 'loading...'

  if (error) return null

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <S.SidebarInfo>
          <h2>SL BRASIL</h2>
          <h3>
            <FiberManualRecordIcon />
            Yan Gonçalves
          </h3>
        </S.SidebarInfo>
        <CreateIcon />
      </S.SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title={'Threads'} />
      <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'} />
      <SidebarOption Icon={DraftsIcon} title={'Saved items'} />
      <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
      <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'} />
      <SidebarOption Icon={AppsIcon} title={'Apps'} />
      <SidebarOption Icon={FileCopyIcon} title={'File browser'} />
      <SidebarOption Icon={ExpandLessIcon} title={'Show less'} />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={'Channels'} />
      <hr />
      <SidebarOption addChannelOption Icon={AddIcon} title={'Add channel'} />

      {channels.docs.sort(compare).map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
          selectChannelOption
        />
      ))}
    </S.SidebarContainer>
  )
}

export default Sidebar
