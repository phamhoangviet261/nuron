import React from 'react'
import { Container,
  Image,
  Infor,
  Place, 
  Name, 
  Highest,
  ETH, 
  PlaceAction, Heart } from './style'
const NFT = ({item}) => {
  return (
    <Container>
      <Image>
        <img src={item.img} alt={item.name} />
      </Image>
      <Infor>
        <Place>
          {item.place}+ Place Bit.
          <PlaceAction><i className="fa-solid fa-ellipsis"></i></PlaceAction>  
        </Place>
        <Name>{item.name}</Name>
        <Highest>Highest bid {item.place}</Highest>
        <ETH>{item.eth}wETH
          <Heart><i className="fa-solid fa-heart"></i>{item.love}</Heart>
        </ETH>
      </Infor>
    </Container>
  )
}

export default NFT