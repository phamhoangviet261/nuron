import styled from "styled-components";

export const Image = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    &>img{
        max-width: 100%;
        min-width: 100%;
        border-radius: 5px;
        transition: all 0.6s ease;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 7px;
    border-radius: 10px;
    background-color: #242435;
    cursor: pointer;
    &:hover{
        ${Image} > img{
            transform: scale(1.2);
            transition: all 0.6s ease;
        }
    }
`;



export const Infor = styled.div`
    margin-top: 10px;
    padding: 0 15px;
    padding-bottom: 15px;
`;

export const Place = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PlaceAction = styled.div`
    cursor: pointer;
    line-height: 40px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover{
        background-color: #212e48;
    }
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;

export const Highest = styled.div``;

export const ETH = styled.div`
    color: #00a3ff;
    margin-top: 10px;    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Heart = styled.div`
    color: grey;    
    display: flex;
    align-items: center;
    justify-content: center;
    & > i {
        margin-right: 4px;
        margin-top: 2px;
    }
    &:hover{
        background-color: #00a3ff;
        color: #fff;
        transition: all 0.4s ease;
    }
    padding: 5px 7px;
    border-radius: 5px;
`;