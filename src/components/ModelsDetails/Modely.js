import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import OutlinedCard from './Card';
import Flip from 'react-reveal/Flip';


const Modely = () => {
    return (

        <MainContainer>
            <Wrap  >
                <Fade left>
                    <ItemText>
                        <h1> Model Y </h1>

                    </ItemText>
                </Fade>
                <ButtonsAndArrow>
                    <Fade bottom>
                        <Container>
                            <InfoContainer>
                                <Information>
                                    <h3>76 cu ft</h3>
                                    <p><small>Cargo Space</small></p>
                                </Information>
                                <Information>
                                    <h3>326 mi </h3>
                                    <p> <small> Range (EPA est.) </small></p>
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
            <SecondImg>
                <Fade left big>
                    <h1>Designed for Efficiency</h1>
                </Fade>
            </SecondImg>
            <Infodiv>
                <Fade bottom>
                    <Head>
                        <h3>Utility</h3>
                        <h2>A Place For Everything</h2>
                        <button>ORDER NOW</button>
                    </Head>
                </Fade>
                <Fade bottom>
                    <Detail>
                        Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.
                    </Detail>
                </Fade>
            </Infodiv>

            <RangeDiv>
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

                <Text>
                    <Fade bottom>
                        <p>Range</p>
                        <h2>Go Anywhere</h2>
                        <br />
                        <br />
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 25,000 Superchargers worldwide, with six new locations opening every week.</p>
                    </Fade>
                </Text>


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
            <InnerVeiw>

            </InnerVeiw>
            <WhiteBg>

            </WhiteBg>

            <BlackCarDiv>
                <CarImg>

                </CarImg>

                <Experience>
                    <Fade left >
                        <h2> Order Model Y</h2>
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

export default Modely;

const MainContainer = styled.div`
    

`

const RangeDiv = styled.div`
    height: 100vh;
    width: 100vw;
   
    display: flex;

`
const ImageContainer = styled.div`
    
    background-image: url("/images/model-y.jpg");
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
       background-image: url("/images/model-y-Img/y1.jfif");
       background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
       

`
const SecondImg = styled.div`
    height: 90vh;
    width: 100vw;
    background-image: url("images/model-y-Img/y2.jfif");
    background-size: cover;
    background-position: center;
    h1{
        
        text-align: center;
        padding-top: 30px;
        font-size: 40px;
    }
`
const WhiteBg = styled.div`
        height: 20vh;
        width: 100vw;
       
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
    
    background-image: url("/images/model3Img/safety_hero.png");
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
    background-image: url("/images/model-y-Img/y3.jfif");
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