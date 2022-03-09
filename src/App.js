import { useState, useContext, createContext } from 'react';
import './App.css';
import styled from "styled-components";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import NFTList from './components/nftList/NFTList';
import ListStep from './components/createAndSell/ListStep';
import Newest from './components/newest/Newest';
import Explore from './components/explore/Explore'
import Footer from './components/footer/Footer';

export const ThemeContext = createContext();

const BodyTheme = styled.div`
  background-color: ${props =>{if (props.type==='dark') return '#151521'; else return '#f5f8fa'}};
  color: ${props =>{if (props.type==='dark') return '#acacac'; else return '#000'}};;
  padding: 80px 40px 10px 40px;
`;

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{
      theme: theme,
      changeTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    }}>
      <Header></Header>
      <BodyTheme type={theme}>
        <Banner></Banner>
        <NFTList></NFTList>
        <ListStep></ListStep>
        <Newest></Newest>
        <Explore></Explore>
        <Footer></Footer>
      </BodyTheme>
    </ThemeContext.Provider>
  );
}

export default App;
