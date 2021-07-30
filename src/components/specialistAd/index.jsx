import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";

import FarmingImg from "../../images/farming.png";
import { Button } from "../button";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

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
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

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
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          {/* <BrandLogo
            logoSize={isMobile ? 33 : 40}
            textSize={isMobile ? 28 : 35}
          /> */}
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>Get access to the Infrastructure as Code Library.</Slogan>
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
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          
          <SloganContainer>
            <Slogan>Deploy your entire tech stack.</Slogan>
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
            <Slogan>Get expert support and training.</Slogan>
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
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>Get access to the Infrastructure as Code Library.</Slogan>
            <Slogan>have an outstanding</Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Join as Specialist</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}
