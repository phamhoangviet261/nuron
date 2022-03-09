import React from 'react'
import { Container, Head, Title, ArrowGroup, Arrow, ListNFTItem } from './style'
import NFT from '../nft/NFT'

const data = [
    {
        name: 'Preatent',
        highestBid: '1/20',
        eth: '0.244',
        love: 322,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-07.jpg'
    },
    {
        name: 'OrBit6',
        highestBid: '2/31',
        eth: '0.2128',
        love: 12,
        place: 12,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-03.jpg'
    },
    {
        name: 'The Worst',
        highestBid: '1/20',
        eth: '0.244',
        love: 456,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-10.jpg'
    },
    {
        name: 'Slang',
        highestBid: '1/20',
        eth: '0.854',
        love: 144,
        place: 1,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-02.jpg'
    },
    {
        name: 'Beat Koin',
        highestBid: '1/20',
        eth: '0.244',
        love: 322,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-05.jpg'
    },
    
]

const NFTList = () => {
  return (
    <Container>
        <Head>
            <Title>Live Bidding</Title>
            <ArrowGroup>
                <Arrow>
                <i className="fa-solid fa-arrow-left"></i>
                </Arrow>
                <Arrow>
                <i className="fa-solid fa-arrow-right"></i>
                </Arrow>
            </ArrowGroup>
        </Head>
        <ListNFTItem>
            {data.map((item, index) => <NFT key={index} item={item}></NFT>)}
        </ListNFTItem>
    </Container>
  )
}

export default NFTList