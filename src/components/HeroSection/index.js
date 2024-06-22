import React from 'react'
import Video from '../../assets/videos/Doge-TV.mp4'
import { HeroContainer, HeroBG, VideoBG } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBG>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBG>
    </HeroContainer>
  )
}

export default HeroSection
