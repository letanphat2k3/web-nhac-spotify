import React from 'react'
import Container from './style'
import CurrentTrack from '../CurrentTrack/CurrentTrack'
import PlayerControls from '../PlayerControls/PlayerControls'

const Footer = () => {
  return (
    <Container>
      <CurrentTrack/>
      <PlayerControls/>
    </Container>
  )
}

export default Footer