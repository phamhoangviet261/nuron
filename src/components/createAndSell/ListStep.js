import React from 'react'
import { Container, Title, ListStepData } from './style'
import Step from './Step'

const data = [
    {
        id: 1,
        title: 'Set up your wallet',
        des: 'Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.',
        img: 'assets/images/icons/shape-7.png'
    },
    {
        id: 2,
        title: 'Create your collection',
        des: 'A great collection of beautiful website templates for your need. Choose the best suitable template.',
        img: 'assets/images/icons/shape-1.png'
    },
    {
        id: 3,
        title: "Add your NFT's",
        des: "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.",
        img: 'assets/images/icons/shape-5.png'
    },
    {
        id: 4,
        title: "Sell Your NFT's",
        des: "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.",
        img: 'assets/images/icons/shape-6.png'
    },
]

function ListStep() {
  return (
    <Container>
        <Title>Create and sell your NFTs</Title>
        <ListStepData>{data.map((item, index) => <Step key={index} item={item}></Step>) }</ListStepData>
    </Container>
  )
}

export default ListStep