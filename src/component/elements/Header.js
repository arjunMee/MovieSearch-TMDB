import React from 'react'
import styled from 'styled-components/macro'

// logo
import right from '../image/right.svg'
import left from '../image/left.svg'

const StyleHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 5px 0px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media screen and (max-width: 500px) {
  }
`

const StyledLeftLogo = styled.img`
  width: 80px;
`
const StyledRightLogo = styled.img`
  width: 80px;
  ${'' /* margin: 20px 0; */}
  float: right;
`

const Header = () => {
  return (
    <StyleHeader>
      <div className='header-content'>
        <StyledLeftLogo src={left} alt='left side react movie icon' />
        <StyledRightLogo src={right} alt='movie icon' />
      </div>
    </StyleHeader>
  )
}

export default Header
