import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


const SolarPanel = () => {
    return (

        <MainContainer>
            <Wrap  >
                <Fade left big>
                    <ItemText>
                        <h1> Solar Roof </h1>
                        <p>Transform your roof and produce clean energy</p>

                    </ItemText>
                </Fade>
                <ButtonsAndArrow>
                    <Fade bottom big>
                        <Container>
                            <InfoContainer>
                                <Information>
                                    <h3>3.1 s</h3>
                                    <p><small>Beautiful Solar Without Compromise</small></p>
                                </Information>
                                <Information>
                                    <h3>25-Year</h3>
                                    <p> <small> Tile <br /> Warranty </small></p>
                                </Information>
                                <Information>
                                    <h3> 24/7 </h3>
                                    <p><small>Outage <br />Protection</small></p>
                                </Information>
                            </InfoContainer>
                            <RightButton>
                                Order now
                            </RightButton>
                        </Container>
                    </Fade>
                    <DownArrow src="images/down-arrow.svg" />

                </ButtonsAndArrow>



            </Wrap>
            <OuterVeiw>

            </OuterVeiw>
            <Infodiv>
                <Fade bottom>
                    <Head>
                        <h3>Design</h3>
                        <h2>A Beautiful Roof</h2>
                        <button>ORDER NOW</button>
                    </Head>
                </Fade>
                <Fade bottom>
                    <Detail>
                        Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling.
                    </Detail>
                </Fade>
            </Infodiv>
            <MenufectContainer>
                <Textcontainer>
                    <Fade right big>
                        <HeaderText>
                            <h2> Energy Storage </h2>
                            Backup Protection
                        </HeaderText>
                    </Fade>
                    <Flip bottom>
                        <TextBody>
                            <p>Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.</p>


                        </TextBody>
                    </Flip>

                </Textcontainer>

                <ImgContainer>
                </ImgContainer>

            </MenufectContainer>

            <SecondImg>

            </SecondImg>

            <ValueDiv>
                <Text>
                    <Fade bottom>
                        <p>Value</p>
                        <h2>Pay Less for Electricity</h2>
                        <br />
                        <br />
                        <p>Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.</p>
                    </Fade>
                </Text>
                <ImageContainer>
                    <Fade top big>
                        <TextWraper>
                            <Information>
                                <h3>3.1 s</h3>
                                <p><small>Beautiful Solar Without Compromise</small></p>
                            </Information>
                            <Information>
                                <h3>25-Year</h3>
                                <p> <small> Tile <br /> Warranty </small></p>
                            </Information>
                            <Information>
                                <h3> 24/7 </h3>
                                <p><small>Outage <br />Protection</small></p>
                            </Information>
                        </TextWraper>
                    </Fade>
                </ImageContainer>


            </ValueDiv>



            <Footer>
                <RoofImg>

                </RoofImg>

                <FooterContent>
                    <Fade left big >
                        <h2> Solar Roof Specs</h2>
                        <br />

                        <RightButtonLast>
                            Order now
                        </RightButtonLast>
                    </Fade>
                </FooterContent>

            </Footer>
        </MainContainer>

    );
};

export default SolarPanel;

const MainContainer = styled.div`
    

`

const ValueDiv = styled.div`
    height: 80vh;
    width: 100vw;
   margin: 10px 0;
    display: flex;

`
const ImageContainer = styled.div`
    
    background-image: url("/images/solar-panel-img/4.jfif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 75%;
        

`
const SecondImg = styled.div`
    height: 60vh;
    width: 100vw;
    margin-top: 30px;
    background-image: url("images/solar-panel-img/3.jfif");
    background-size: cover;
    background-position: center;
    h1{
        
        text-align: center;
        padding-top: 30px;
        font-size: 40px;
    }
`
const TextWraper = styled.div`
    margin-top: 430px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Text = styled.div`
    width: 25%;
    padding: 10px;
    margin-top: 30px;


`
const OuterVeiw = styled.div`
       height: 70vh;
       width: 100vw;
       background-image: url("/images/solar-roof.jpg");
       background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
       

`

const Footer = styled.div`
    height: 80vh;
    width: 100vw;
    background: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
   


`
const RoofImg = styled.div`
        width: 30vw;
        height: 200px;
        margin-top: 280px;
        padding-top: 200px;
        background-image: url("/images/solar-panel-img/5.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

`
const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2{
        color: white;
    }

`

const RightButtonLast = styled.div`
    background-color: white;
    height: 40px;
    width: 256px;
    color: balck;
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

const Infodiv = styled.div`
    heigth: 100vh;
    width: 100vw;
    padding: 70px 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;


`
const Head = styled.div`
    h3{
        opacity: 0.9;

    }
    button{
       margin-top: 10px;
        border: 3px solid black;
        border-radius: 100px;
        padding: 8px 35px;
    }
    button:hover{
        background: black;
        cursor: pointer;
        color: white;
        
    }

`
const Detail = styled.div`
    width: 600px;
    padding-right: 40px;
    opacity: 0.85;

`
const MenufectContainer = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    
 
`
const ImgContainer = styled.div`

    width: 70%;
    
    background-image: url("/images/solar-panel-img/2.jfif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 0px;
    padding-right: 20px;
    li{
        margin: 20px;
        padding: 20px;
    }

`
const Textcontainer = styled.div`
    width: 30%;
    padding: 30px 50px;
    p{
        margin-bottom: 10px;
    }

`

const HeaderText = styled.div`

    margin-bottom: 50px;
`
const TextBody = styled.div`
   margin-bottom: 40px;
`
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/solar-panel-img/1.png");
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
        color: White;
        font-size: 40px;
    }
    p{
        color: white;
    }
   

`
const Information = styled.div`
    padding: 20px;
        h3{
            color: white;
            font-weight: 300;
        }
        small{
            color: white;
        }

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.div`
        display: flex;
`

const RightButton = styled.div`
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
    border: 3px solid white;
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