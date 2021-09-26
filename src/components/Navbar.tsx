import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/logo.png';
import SearchImg from 'assets/images/search.png';
import { Colors } from 'consts/colors';

const Frame = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const LogoImg = styled.img`
  width: 3.5rem;
  border-radius: 50%;
  margin: 1rem;
  margin-right: 3rem;
`;

const Button = styled.button`
  color: ${Colors.white};
  margin-right: 3rem;
  border: 0;
  outline: 0;
  background: none;
  transition: all 0.6 ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  width: 40%;
  height: 3.5em;
  outline: 0;
`;

const ImgSearch = styled.img`
  height: 2rem;
  width: 8em;
  font-size: 0.2em;
  outline: 0;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
const AuthFrame = styled.div`
  position: absolute;
  right: 5rem;
`;
const Navbar = () => {
  return (
    <Frame>
      <LogoImg src={Logo} alt="logo image" />
      <Button>Home</Button>
      <Button>장소 리스트</Button>
      <Input type="search" placeholder="검색어를 입력해주세요."></Input>
      <ImgSearch src={SearchImg} alt="search button" />
      <AuthFrame>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </AuthFrame>
    </Frame>
  );
};

export default Navbar;
