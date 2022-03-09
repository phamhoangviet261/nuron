import React from 'react'
import { FooterContainer, FooterTop, FooterBottom,
    FooterTopColumn1,
    FooterTopColumn2,
    FooterTopColumn3,
    FooterTopColumn4,
    FooterTopTitle,
    FooterTopDescription,
    EmailContainer,
    EmailInput,
    StyledLink, FooterTopLinkList, StyledLinkTerms, StyledLinkPolicy, FooterSocial } from './style'


const dataNuron = [
    'Protocol Explore', 'System Token', 'Otimize Time', 'Visual Checking', 
    'Fadeup System', 'Activity Log', 'System Auto Sync'
]
const dataInformation = [
    'Market Explore', 'Readfy Token', 'Main Option', 'Product Checking',
    'Blog Grid', 'About Us', 'Fix Bug'
]
const Footer = () => {
  return (
    <FooterContainer>
        <FooterTop>
            <FooterTopColumn1>
                <img src='assets/images/logo/logo-white.png' alt="logo-footer"/>
                <FooterTopDescription fs={16}>Created with the collaboration of over 60 of the world's best Nuron Artists.</FooterTopDescription>

                <EmailContainer>
                    <FooterTopDescription fs={20} color={`white`}>
                    Get The Latest Nuron Updates    
                    </FooterTopDescription>
                    <EmailInput>
                        <input placeholder='Your email'/>
                        <div>Subcribe</div>
                    </EmailInput>
                    <FooterTopDescription fs={16}>
                    Email is safe. We don't spam.
                    </FooterTopDescription>
                </EmailContainer>
            </FooterTopColumn1>
            <FooterTopColumn2>
                <FooterTopTitle>Nuron</FooterTopTitle>
                <FooterTopLinkList>
                    {dataNuron.map((item, index) => <StyledLink key={index}>{item}</StyledLink>)}
                </FooterTopLinkList>
            </FooterTopColumn2>
            <FooterTopColumn3>
                <FooterTopTitle>Information</FooterTopTitle>
                <FooterTopLinkList>
                    {dataInformation.map((item, index) => <StyledLink key={index}>{item}</StyledLink>)}
                </FooterTopLinkList>
            </FooterTopColumn3>
            <FooterTopColumn4>
                <FooterTopTitle>Recent Sold Out</FooterTopTitle>
            </FooterTopColumn4>
        </FooterTop>
        <FooterBottom>
            <FooterTopDescription fs={16} style={{paddingRight: '24px'}}>©2022 Nuron, Inc. All rights reserved.</FooterTopDescription>
            <StyledLinkTerms>Terms</StyledLinkTerms>
            <StyledLinkPolicy>Privacy Policy</StyledLinkPolicy>
            <FooterSocial>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
            </FooterSocial>
        </FooterBottom>
    </FooterContainer>
  )
}

export default Footer