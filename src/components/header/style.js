import styled from "styled-components";

export const Contaner = styled.header`
    --columns: 7;
    --gap: 5px;
    display: grid;
    grid-template-columns: 2fr 12fr 4fr 2fr 1fr 1fr;
    grid-gap: var(--gap);
    justify-content: center;
    align-items: center;
    background-color: ${props =>{if (props.type==='dark') return '#151521'; else return '#f5f8fa'}};
    color: ${props =>{if (props.type==='dark') return '#acacac'; else return '#000'}};;
    padding: 10px 40px;
    border-bottom: 1px solid #151521;
    transition: all 0.3;
    position: fixed;
    z-index: 9999;
`;

export const Logo = styled.div`
    border-right: 1px solid grey;
    height: 60%;
    & > img{
        max-width: 80%;
    }
`;

export const Navgation = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const NavigationItem = styled.li`
    padding: 5px 10px;
    cursor: pointer;
`;

export const SearchBar = styled.input`
    background-color: ${props =>{if (props.type==='dark') return '#151521'; else return '#f5f8fa'}};
    color: #808080;
    border: 0.5px solid #5c5c5c;
    border-radius: 15px;
    padding: 10px 12px;
    margin-right: 15px;
    outline: none;
    padding-left: -5px;
    &:focus{
        border-color: #00A3FF;
        transition: all 0.6s;
    }
`;

export const Wallet = styled.div`
    font-size: 12px;
    font-weight: 500;
    background-color: #212e48;
    text-align: center;
    line-height: 38px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    &:hover{
        background-color: #00a3ff;
        color: #fff;
        /* transition: all 0.2s; */
    }
`;

export const Notification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #5c5c5c;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 auto;
`;

export const ButtonChangeTheme = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #5c5c5c;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 auto;
`;