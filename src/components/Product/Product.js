import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Product = ({ product }) => {
    const { title, description, bgImage, leftButtonText, rightButtonText } = product;
    return (
        <Wrap backgroundImg={bgImage} >
            <Fade left>
                <ItemText>
                    <h1> {title} </h1>
                    <p> {description} </p>
                </ItemText>
            </Fade>
            <ButtonsAndArrow>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {
                            rightButtonText &&
                            <RightButton>
                                {rightButtonText}
                            </RightButton>
                        }
                    </ButtonGroup>

                </Fade>
                <DownArrow src="images/down-arrow.svg" />

            </ButtonsAndArrow>
        </Wrap>
    );
};


export default Product;
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.backgroundImg}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1{
        font-size: 38px;
        opacity: 0.94;
    }

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(0.3, 0.4, 10, 10);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 9px; 
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.75;
    color: black;
`
const DownArrow = styled.img`
    margin-bottom: 12px;
    height: 50px;
    overflow-x: hidden;
    animation: animateArrow infinite 1.4s;

`

const ButtonsAndArrow = styled.div`
    display: flex;
    flex-direction: column;
`