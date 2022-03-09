import React, {useState} from 'react'
import { Container, Head, Title, ArrowGroup, Arrow, ListNFTItem } from '../nftList/style'
import { Filter } from './style'
import FilterItem from './Filter'
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
    {
        name: 'Preatent',
        highestBid: '1/20',
        eth: '0.244',
        love: 322,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-11.jpg'
    },
    {
        name: 'OrBit6',
        highestBid: '2/31',
        eth: '0.2128',
        love: 12,
        place: 12,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-04.jpg'
    },
    {
        name: 'The Worst',
        highestBid: '1/20',
        eth: '0.244',
        love: 456,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-08.jpg'
    },
    {
        name: 'Slang',
        highestBid: '1/20',
        eth: '0.854',
        love: 144,
        place: 1,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-06.jpg'
    },
    {
        name: 'Beat Koin',
        highestBid: '1/20',
        eth: '0.244',
        love: 322,
        place: 20,
        time: '',
        img: 'https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-09.jpg'
    },
]
const Explore = () => {
    const [filter, setFilter] = useState(false); // check is filter open or not?
    
    
  return (
    <Container>
        <Head>
            <Title>Explore Products</Title>
            <Filter onClick={() => setFilter(!filter)}>   
            Filter<i class="fa-solid fa-filter"></i>
            </Filter>
        </Head>
        {filter === true ? <FilterItem></FilterItem> : <></>} 
        <ListNFTItem>
            {data.map((item, index) => <NFT key={index} item={item}></NFT>)}
        </ListNFTItem>
    </Container>
  )
}

export default Explore