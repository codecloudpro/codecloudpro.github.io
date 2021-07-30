import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Products and Services</Title>
          <FLink>Infrastructure Code Library</FLink>
          <FLink>Code Cloud Landing Zone</FLink>
          <FLink>Code Cloud Pipelines</FLink>
          <FLink>Reference Architecture</FLink>
          <FLink>DevOps Training Library</FLink>
          <FLink>Support</FLink>
          <FLink>Repo Browser</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Learn</Title>
          <FLink>How it Works</FLink>
          <FLink>Pricing</FLink>
          <FLink>Deployment</FLink>
          <FLink>FAQ</FLink>
          <FLink>Devops Checklist</FLink>
          <FLink>Devops Resources</FLink>
          <FLink>Why is product down</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Company</Title>
          <FLink>How we Work</FLink>
          <FLink>Customers</FLink>
          <FLink>Careers</FLink>
          <FLink>Terms of Services</FLink>
          <FLink>Privacy Policy</FLink>
          <FLink>Cookie Policy</FLink>
          <FLink>All Legal Documents</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Connect</Title>
          <FLink>Blog</FLink>
          <FLink>Contact Us</FLink>
          <FLink>NewsLetter</FLink>
          <FLink>Community Forum</FLink>
          <FLink>Code Cloud Forum</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
          <PrivacyText> &#169; All Rights Reserved. 2020</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
