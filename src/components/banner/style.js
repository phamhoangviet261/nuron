import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 42px;
`;

export const BannerText = styled.div`
    padding-top: 50px;
`;

export const Title = styled.h2`
    font-size: 60px;
    font-weight: 400;
`;

export const Subtitle = styled.p`
    color: #acacac;
    line-height: 1.6;
    font-weight: 400;
    font-size: 22px;
`;

export const ButtonGroup = styled.div`
    display: flex;
`;

export const ButtonGetStarted = styled.div`
    width: 100px;
    text-align: center;
    padding: 18px 30px;
    background-color: #00a3ff;
    border-radius: 15px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;    
    transition: all 1s;
    &:hover{
        background-color: #212e48;
    }
`;

export const ButtonCreate = styled.div`
    width: 100px;
    text-align: center;
    padding: 18px 30px;
    background-color: #212e48;
    border-radius: 15px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    margin-left: 30px;
    transition: all 1s;
    &:hover{
        background-color: #00a3ff;
    }
`;

export const BannerImage = styled.div`
    margin-top: 60px;
    & > img{
        max-width: 80%;
    }
`;