import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

export const ArrowGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    color: #00a3ff;
    &:hover{
        background-color: #00a3ff;
        color: #fff;
    }
    background-color: #212e48;
    margin-left: 15px;
`;

export const ListNFTItem = styled.div`    
    --columns: 5;
    --gap: 20px;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    grid-gap: var(--gap);
`;