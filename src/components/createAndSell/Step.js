import React from 'react'

import { StepItem, StepItemHeader, 
    StepItemIcon, StepItemInner, 
    StepItemTitle, StepItemDescription, StepItemArrow } from './style'

const Step = ({key, item}) => {
  return (
    <StepItem>
        <StepItemIcon src={item.img}></StepItemIcon>
        <StepItemHeader>STEP-0{item.id}</StepItemHeader>
        <StepItemInner>
            <StepItemTitle>{item.title}</StepItemTitle>
            <StepItemDescription>{item.des}</StepItemDescription>
            <StepItemArrow><i class="fa-solid fa-arrow-right"></i></StepItemArrow>
        </StepItemInner>
    </StepItem>
  )
}

export default Step