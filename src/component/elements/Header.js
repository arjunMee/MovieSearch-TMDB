import React from 'react'
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from '../styles/StyledHeader'

import RMDBLogo from '../image/left.svg'
import TMDBLogo from '../image/right.svg'

function Header() {
  return (
    <StyledHeader>
      <div className='header-content'>
        <StyledRMDBLogo src={RMDBLogo} alt='rmdb logo' />
        <StyledTMDBLogo src={TMDBLogo} alt='tmdb logo' />
      </div>
    </StyledHeader>
  )
}

export default Header
