import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import OutlinedCard from './Card';
import Flip from 'react-reveal/Flip';

const Modelx = () => {
    return (

        <MainContainer>
            <Wrap  >
                <Fade left>
                    <ItemText>
                        <h1> Model X</h1>

                    </ItemText>
                </Fade>
                <ButtonsAndArrow>
                    <Fade bottom>
                        <Container>
                            <InfoContainer>
                                <Information>
                                    <h3>2.5 s</h3>
                                    <p><small>0-60 mph*</small></p>
                                </Information>
                                <Information>
                                    <h3>340 mi</h3>
                                    <p> <small> Range (EPA est.) </small></p>
                                </Information>
                                <Information>
                                    <h3>9.9 s</h3>
                                    <p><small>1/4 Mile </small></p>
                                </Information>
                                <Information>
                                    <h3>AWD</h3>
                                    <p><small>Dual Motor</small></p>
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
            <InnerVeiw>

            </InnerVeiw>
            <MenufectContainer>
                <Textcontainer>
                    <Fade right big>
                        <HeaderText>
                            <h2> Safety </h2>
                            Built for Safety
                        </HeaderText>
                    </Fade>
                    <Flip bottom>
                        <TextBody>
                            <p>Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants.</p>


                        </TextBody>
                    </Flip>
                    <Fade left>
                        <OutlinedCard />
                    </Fade>

                </Textcontainer>

                <ImgContainer>

                    <Fade right>
                        <li>Impact Protection</li>
                        <li>Rigid Structure</li>
                        <li>Very Low Rollover Risk</li>
                    </Fade>

                </ImgContainer>

            </MenufectContainer>

            <Infodiv>
                <Fade bottom>
                    <Head>
                        <h3>All-Wheel Drive</h3>
                        <h2>Dual Motor</h2>
                        <button>ORDER NOW</button>
                    </Head>
                </Fade>
                <Fade bottom>
                    <Detail>
                        Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.
                    </Detail>
                </Fade>
            </Infodiv>
            <RangeDiv>


                <Text>
                    <Fade right>
                        <p>Range</p>
                        <h2>Go Anywhere</h2>
                        <br />
                        <br />
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 25,000 Superchargers worldwide, with six new locations opening every week.</p>
                    </Fade>
                </Text>
                <ImageContainer>
                    <Fade top>
                        <SecondImgText>
                            <Information>
                                <h3>3.1 s</h3>
                                <p><small>0-60 mph*</small></p>
                            </Information>
                            <Information>
                                <h3>353mi</h3>
                                <p> <small> Range (EPA est.) </small></p>
                            </Information>
                            <Information>
                                <h3>AWD</h3>
                                <p><small>Dual Motor</small></p>
                            </Information>
                        </SecondImgText>
                    </Fade>
                </ImageContainer>


            </RangeDiv>
            <Fade top >
                <Infodiv>
                    <Head>
                        <h3>Autopilot</h3>
                        <h2>Future of Driving</h2>
                        <button>ORDER NOW</button>
                    </Head>
                    <Detail>
                        Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving
                    </Detail>
                </Infodiv>
            </Fade>


            <BlackCarDiv>
                <CarImg>

                </CarImg>

                <Experience>
                    <Fade left >
                        <h2> Order Model X</h2>
                        <br />

                        <RightButtonLast>
                            Order now
                        </RightButtonLast>
                    </Fade>
                </Experience>

            </BlackCarDiv>
        </MainContainer>

    );
};

export default Modelx;

const MainContainer = styled.div`
    

`

const RangeDiv = styled.div`
    height: 100vh;
    width: 100vw;
   
    display: flex;

`
const ImageContainer = styled.div`
    
    background-image: url("/images/modle-x-img/4.jfif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 75%;
    
        

`
const SecondImgText = styled.div`
    margin-top: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Text = styled.div`
    width: 25%;
    padding: 10px;
    margin-top: 30px;


`
const InnerVeiw = styled.div`
       height: 70vh;
       width: 100vw;
       background-image: url("/images/model3Img/model3stri.jfif");
       background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
       

`


const BlackCarDiv = styled.div`
    height: 80vh;
    width: 100vw;
    background: black;
    display: flex;


`
const CarImg = styled.div`
        width: 60vw;
        background-image: url("/images/model3Img/model3btm.jfif");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

`
const Experience = styled.div`
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
    heigth: 50vh;
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
    
    background-image: url("/images/audio.jpg");
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
    background-image: url("/images/modle-x-img/1.jfif");
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
    color: white;
    h1{
        color: white;
        font-size: 40px;
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