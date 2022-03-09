import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background: #242435; */
    margin-top: 80px;
`;

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 7fr 3fr 3fr 3fr;
    grid-gap: 20px;
`;

export const FooterTopColumn1 = styled.div`
    padding: 50px 0px;
    & > img{
        max-width: 120px;
    }
`;
export const FooterTopColumn2 = styled.div``;
export const FooterTopColumn3 = styled.div``;
export const FooterTopColumn4 = styled.div``;

export const FooterTopTitle = styled.h6`
    font-size: 24px;
    margin-bottom: 25px;
    font-weight: 700;
    line-height: 1.25;
`;

export const FooterTopDescription = styled.h6`
    font-size: ${props => props.fs+'px' || "20px"};
    color: ${props => props.color || "#acacac"};
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmailInput = styled.div`
    display: flex;
    cursor: pointer;
    & > input{
        height: 35px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        outline: #00a3ff;
        padding-left: 10px;
    }
    & > div{
        height: 31px;
        line-height: 31px;
        background: #212e48;
        color: #fff;
        font-weight: 700;
        padding: 5px 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    & > div:hover{
        background: #00a3ff;
    }
`;

export const FooterTopLinkList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled.a`
    font-size: 16px;
    color: #acacac;
    font-weight: 400;
    transition: 0.4s;
    position: relative;
    margin: 10px 0;
    cursor: pointer;
    width: fit-content;
    &::after{
        position: absolute;
        content: "";
        margin-top: 5px;
        bottom: 0;
        background: #00a3ff;
        width: 0px;
        height: 2px;
        transition: 0.3s;
        left: 0;
    }
    &:hover{
        color: #00a3ff;
        /* border-bottom: 2px solid #00a3ff; */
        &::after{
            width: 100%;
        }
    }    
`;

export const StyledLinkTerms = styled(StyledLink)`
    margin: 0px 24px;
    &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        width: 1px;
        height: 25px;
        background: #acacac;
        transform: translateY(-50%);
        margin-left: -24px;
    }
`

export const StyledLinkPolicy = styled(StyledLink)`
    margin: 0px 12px;
    &::before{
        position: absolute;
        content: "";
        height: 3px;
        width: 3px;
        background: #acacac;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        margin-left: -12px;
    }
`

export const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ffffff14;
`;

export const FooterSocial = styled.div`
    flex: 1;
    text-align: right;
    & > i {
        font-size: 20px;
        padding: 12px;
        margin: 0 4px;
        /* border: 1px solid #acacac; */
        border-radius: 50%;
        background: #242435;
        cursor: pointer;
        transition: 0.4s ease;
    }
    & > i:hover{
        background: #00a3ff;
    }
`;