import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #777;
  color: #fff;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CompanyLogo = styled.img`
  width: 120px;
  height: auto;
`;

const CompanyInfo = styled.div`
  max-width: 300px;
  margin-left: 30px;
`;

const CompanyName = styled.h3`
  margin-bottom: 10px;
`;

const CompanyAddress = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

const PageLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

const PageLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin: 5px;
  }
`;

const CopyrightText = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyLogo src="http://www.spateliti.com/images/logo.png" alt="Company Logo" />
        <CompanyInfo>
          <CompanyName>Your Company Name</CompanyName>
          <CompanyAddress>
            L.I.C Colony, Dinkar Nagar,
            <br />
            Nalanda - Bihar - 803101
          </CompanyAddress>
        </CompanyInfo>
        <PageLinks>
          <PageLink href="/">Home</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/services">Services</PageLink>
          <PageLink href="/contact">Contact</PageLink>
        </PageLinks>
      </FooterContent>
      <CopyrightText>© 2023 Your Company. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
