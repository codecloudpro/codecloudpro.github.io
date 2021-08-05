import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import FarmingImg from "../../images/hello2.png";
import { Button } from "../button";
import { deviceSize } from "../responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`

const Slogan = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #000000;
  font-weight: 500;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;
const StandoutImage = styled.div`
  width: 500px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

export function SpecialistAd(props) {

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>GET ACCESS TO THE INFRASTRUCTURE AS A CODE LIBRARY.</Slogan>
            <Slogan>Build your infrastructure on top of a collection of over 300,000 lines of reusable, battle-tested infrastructure code written in Terraform, Go, Python, and Bash that has been proven in production at hundreds of companies and is maintained and supported by DevOps experts.</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Browse the library</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
      <ContentContainer>
      <StandoutImage>
          <img src={FarmingImg} alt="images" />
        </StandoutImage>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          
          <SloganContainer>
            <Slogan>DEPLOY YOUR ENTIRE TECH STACK.</Slogan>
            <Slogan>Deploy your own tech stack by following our Production Deployment Guides or have Gruntwork deploy a Reference Architecture for you, giving you an end-to-end tech stack, 100% backed by code, in about 1 day. You get to customize the tech stack to your needs, choosing from Kubernetes or ECS, MySQL or Postgres, Jenkins or CircleCI, and so on.</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>See how it Works</Button>
        </SloganContainer>
        
      </ContentContainer>
      <ContentContainer>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>GET EXPERT SUPPORT AND TRAINING.</Slogan>
            <Slogan>Get support from a team of DevOps experts who can help you with questions, troubleshooting, best practices, and maintenance. Learn DevOps from our DevOps Training Library or DevOps Bootcamps. We wrote the book on Terraform and the definitive guide to AWS, so you’re in good hands.</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Preview our training</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
      <ContentContainer>
      <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>ACHIEVE COMPLIANCE.</Slogan>
             <Slogan>Code Cloud Pro's modules are certified compliant by the Center for Internet Security (CIS), so you can get compliance out of the box, either by having Gruntwork deploy an end-to-end CIS-compliant Reference Architecture for you, or by assembling your own architecture using our modules and compliance guide.</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Acheive compliance</Button>
        </SloganContainer>
        </ContentContainer>
    </SpecialistAdContainer>
  );
}
