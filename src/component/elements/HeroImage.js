import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeroImage = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  background-size: 100% cover;
  width: 100%;
  height: 815px;
  position: relative;
  animation: animateHeroimage 1s;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 720px) {
  }

  @media screen and (max-width: 400px) {
  }

  .heroimage-text {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      color: #fff;

      @media screen and (max-width: 720px) {
      }
      @media screen and (max-width: 400px) {
      }
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      @media screen and (max-width: 720px) {
      }
    }

    @media screen and (max-width: 720px) {
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const HeroImage = ({ title, text, image }) => {
  return (
    <div
      style={{
        background: 'var(--darkGrey)',
        borderTop: '1px solid var(--medGrey)',
        borderBottom: '1px solid var(--medGrey)',
      }}
    >
      <StyledHeroImage image={image}>
        <div className='heroimage-contaier'>
          <div className='heroimage-text'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </StyledHeroImage>
    </div>
  )
}

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default HeroImage
