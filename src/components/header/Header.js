import React, {useState, useEffect, useContext} from 'react'
import { Contaner, Logo, Navgation, NavigationItem, SearchBar,
    Wallet, Notification, ButtonChangeTheme} from './style';
import { ThemeContext } from '../../App';
const Header = () => {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
    <Contaner type={context.theme}>
        <Logo>
            {context.theme == 'light' ? <img src="assets/images/logo/logo-dark.png" alt="Logo"/> : <img src="assets/images/logo/logo-white.png" alt="Logo"/> }
            
            
        </Logo>
        <Navgation>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>About</NavigationItem>
            <NavigationItem>Explore</NavigationItem>
            <NavigationItem>Pages</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
        </Navgation>
        <SearchBar placeholder='Search Here' type={context.theme}></SearchBar>
        <Wallet>Wallet Connect</Wallet>
        <Notification>
        <i className="fa-solid fa-bell"></i>
        </Notification>
        <ButtonChangeTheme>
            {context.theme == 'dark' 
            ? <i className="fa-solid fa-sun" onClick={()=> context.changeTheme('light')}></i> 
            : <i className="fa-solid fa-moon" onClick={()=> context.changeTheme('dark')}></i>}
        </ButtonChangeTheme>
    </Contaner>
  )
}

export default Header