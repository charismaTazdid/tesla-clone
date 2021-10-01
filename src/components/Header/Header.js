import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {

    const [burgOpen, setBurgOpen] = useState(false)
    return (
        <Container>
            <a href="/home">

                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="/models">Model S</a>
                <a href="/model3">Model 3</a>
                <a href="/modelx">Model X</a>
                <a href="/modely">Model Y</a>
                <a href="/solar-panel">Solar Roof</a>
                <a href="/solar-panel">Solar panels</a>
            </Menu>
            <RightMenu>
                <a href="/home">Shop</a>
                <a href="/"> Account </a>
                <CustomMenu onClick={() => setBurgOpen(true)}>

                </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgOpen}>
                <CloseWrapper>
                    <CloseBtn onClick={() => setBurgOpen(false)} />
                </CloseWrapper>
                <li><a href="/models">Model S</a></li>
                <li><a href="/model3">Model 3 </a></li>
                <li><a href="/modely">Model Y </a></li>
                <li><a href="/modelx">Model X </a></li>
                <li><a href="/solar-panel">Solar Panel</a></li>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/"> Trade-In</a></li>
                <li><a href="/">Cyber Truck</a></li>


            </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
   justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a{
        font-weight: 600;
        padding: 5px 10px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        opacity: 0.8;
        font-size: 13px;
        transition: 1s ease;
    }
    a:hover{
        opacity: 0.8;
        transition: 2s ease;
        border-radius: 4px;
        background:rgb(240,255,240)
    }
    @media(max-width: 768px){
        display: none;
    }

`
const RightMenu = styled.div`

    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        margin-right : 10px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        opacity: 0.9;
    }

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 290px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    jsutify-content: flex-start;
    text-align: start;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a{
            font-weight: 600;
        }
  };
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in;
`
const CloseBtn = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`