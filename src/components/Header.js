/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [BurgerNavo, setBurgerNavo] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
        {/* <a href="#">MODEL S</a>

        <a href="#">MODEL Y</a>

        <a href="#">MODEL X</a>

        <a href="#">MODEL 3</a> */}
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>

        <a href="#">ACCOUNT</a>

        <CustomMenu onClick={() => setBurgerNavo(true)}>
          <MenuIcon />
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={BurgerNavo}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerNavo(false)} />
        </CloseWrap>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Space X</a>
        </li>
        <li>
          <a href="#">The Boring Company</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  right: 0;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 100px;

  a {
    font-weight: 500;
    padding: 0 20px;
    flex-wrap: nowrap;
    /* &:hover {
      background-color: grey;
      /* backdrop-filter: unset; */
    /* opacity: 50%; */
    /* border:30px; */
    /* border-radius: 16px; */
    /* border-width:50px; */
    /* transition: color 0.33s ease, background-color 0.33s ease; */
    /* block-size: 30px; */
    /* align-items: center; */
    /* } */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const BurgerNav = styled.div`
  position: fixed;
  width: 300px;
  background-color: white;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  li {
    margin: 8px;
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 500;
    }
  }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
