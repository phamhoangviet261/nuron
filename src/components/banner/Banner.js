import React from 'react'
import { Container, BannerText, BannerImage, Title, Subtitle, ButtonGroup, ButtonGetStarted, ButtonCreate } from './style'

const Banner = () => {
  return (
    <Container>
        <BannerText>
            <Title>Discover Digital Art, Collect and Sell Your Specific NFTs.</Title>
            <Subtitle>Partner with one of the world’s largest retailers to showcase your brand and products.</Subtitle>
            <ButtonGroup>
                <ButtonGetStarted>Get Started</ButtonGetStarted>
                <ButtonCreate>Create</ButtonCreate>
            </ButtonGroup>
        </BannerText>
        <BannerImage>
            <img src='assets/images/slider/slider-1.png' alt='Slider' />
        </BannerImage>
    </Container>
  )
}

export default Banner