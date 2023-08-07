import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  float: left;
  background: #43494c;
  height: 72px;
  cursor: default;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const CollegeAddr = styled.div`
  width: 295px;
  height: 50px;
  padding: 26px 60px 20px 76px;
  position: relative;
  color: #fff;
  line-height: 22px;
  float: left;
  z-index: 99;
  background-color: #007bff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: transform 0.2s ease-out;
  transform: translateY(0);

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #007bff;
    transform: translateX(-50%);
  }

  &:hover {
    background-color: #0056b3;
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const DownloadAppForm = styled.a`
  color: #fff;
  margin: 25px 20px;
  width: 525px;
  float: right;
  text-decoration: none;
  text-align: center;
  font-size: 20px;

  &:hover {
    color: #024271;
  }

  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <CollegeAddr>
        <span>06112 - 688016</span>
        <br />
        L.I.C Colony, Dinkar Nagar, Nalanda - Bihar - 803101
      </CollegeAddr>
      <DownloadAppForm href="pdf/registration-cum-admission-form.pdf" target="_blank">
        Admission Open for 2017-2019 Click here to Get Form
      </DownloadAppForm>
    </HeroContainer>
  );
};

export default Hero;
