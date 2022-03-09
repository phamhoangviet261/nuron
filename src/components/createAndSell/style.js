import styled from "styled-components";

// For ListStep.js

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

export const ListStepData = styled.div`    
    --columns: 4;
    --gap: 50px;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    grid-gap: var(--gap);
    margin-top: 50px;
`;

// For Step.js



export const StepItemIcon = styled.img`
    position: absolute;
    max-width: 80px;
    top: -20px;
    right: -20px;
`;

export const StepItemHeader = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const StepItemInner = styled.div`

`;

export const StepItemTitle = styled.h4`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 10px;
    color: #ffffff;
`;

export const StepItemDescription = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #acacac;
    margin-bottom: 30px;
    margin-top: 20px;
`;

export const StepItemArrow = styled.div`

`;

export const StepItem = styled.div`
    background: #24243557;    
    height: 300px;
    position: relative;
    padding: 30px 40px;
    &:hover{
        ${StepItemTitle} {
            color: #00a3ff;
        }
        ${StepItemArrow} {
            color: #00a3ff;
        }
        transition: 1700ms cubic-bezier(0.17, 0.67, 0, 1.01);
        transform: translateY(-10px);
    }
    cursor: pointer;
    user-select: none;
`;