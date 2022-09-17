import React from 'react';
import styled, { css } from 'styled-components';
import { LightTitle, Paragraph, Bold } from '../styles/styledPageComponents';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3vh;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  width: 75%;
  position: relative;
  padding: 5vw;
  padding-bottom: 2vw;
  margin-top: -3vw;
`;

const ImageWrapper = styled.div`
  &:hover img {
    border: 1px solid rgba(0,0,0,0.6);
    transition: border 100ms ease-out 10ms;
  }  
`;

const Image = styled.img`
  display: inline-block;
  position: relative;
  height: auto;
  max-width: 50%;
  transform: rotate(19deg);
  box-shadow: 0.1rem 0.1rem 2rem rgba(0,0,0,0.3);
  border: 0px solid transparent;
  border-radius: 0.3rem;
  z-index: auto;

  ${({ left }) =>
    left && css`
      z-index: 15;
      transform: rotate(-28deg);
      margin-bottom: 20px;
    `
  }
`;

export default () => (
  <>
    <LightTitle>CV</LightTitle>
    <Paragraph emphasis>
      <Bold style={{ textDecoration: 'line-through' }}>Click image to download as PDF →</Bold>
      {' '}Outdated
    </Paragraph>
    {/* <FlexContainer>
      <Anchor href='/assets_cv/public_cv_philip_hradecsni.pdf' download media_type="application/pdf">
        <ImageWrapper>
          <Image src='/assets_cv/Philip_Hradecsni_CV-1.jpg' alt="image of cv" left />
          <Image src='/assets_cv/Philip_Hradecsni_CV-2.jpg' alt="image of cv" right />
        </ImageWrapper>
      </Anchor>
    </FlexContainer> */}
  </>
)