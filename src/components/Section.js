/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
  footer,
}) {
  return (
    <Container bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>{title}</ItemText>
        <ItemHighlight>
          {description}
          {/* <span className="Underlined__text">Touchless Delivery</span> */}
        </ItemHighlight>
      </Fade>
      <Fade bottom>
        <ButtonWrap>
          <button className="orders">{leftBtnText}</button>
          <button className="inventory">{rightBtnText}</button>
        </ButtonWrap>
        <DownArrow src="/images/down-arrow.svg" />
      </Fade>
      <Footer>
        <>{footer}</>
      </Footer>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/model-s.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  font-size: 3em;
  text-align: center;
  color: #333333;
  padding-top: 10vh;
`;

const ItemHighlight = styled.div`
  text-align: center;
  color: #666666;
  font-size: 1em;

  span {
    text-decoration: underline;

    &:hover {
      color: #333333;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  padding-top: 27em;

  @media (max-width: 600px) {
    padding-bottom: 20px;
  }
  button.orders {
    background-color: #333333;
    color: white;
    width: 20em;
    height: 3em;
    border-radius: 100px;
    border: none;
    opacity: 80%;
    cursor: pointer;
    margin: 10px 20px 0 20px;
  }
  button.inventory {
    background-color: #cccccc;
    color: black;
    width: 20em;
    height: 3em;
    cursor: pointer;
    border-radius: 100px;
    border: none;
    opacity: 80%;
    margin: 10px 20px 0 20px;
  }
`;

const DownArrow = styled.img`
  display: block;
  margin-top: 30px;
  width: 100%;
  cursor: pointer;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Footer = styled.div`
text-align: center;

`