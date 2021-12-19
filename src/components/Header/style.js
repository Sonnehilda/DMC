import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  MainHeader: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid black;
    height: ${props => props.height}px;
    transition: 0.25s;
    background-color: #34558b;
    z-index: 30;
    &:hover {
      height: 60px;
    }
  `,
  Nav: styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  LogoNav: styled.div`
    width: 720px;
    display: flex;
    justify-content: flex-start;
  `,
  Mypage: styled.a`
    margin-left: 10px;
    text-decoration: none;
    font-size: 16px;
    color: white;
    cursor: pointer;
  `,
  Profile: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Dropdown: styled.div`
    position: absolute;
    margin-top: 9.5rem;
    padding-top: 1rem;
    width: 8rem;
    > :nth-child(4):before {
      position: relative;
      top: -8.05em;
      left: 6.15rem;
      border-color: #fff transparent;
      border-style: solid;
      border-width: 0 7px 8px 7px;
      z-index: 0;
      content: '';
    }
    > :nth-child(4):after {
      position: relative;
      top: -8.125em;
      left: 5.275rem;
      border-bottom: 8px solid black;
      border-left: 7px solid #34558b;
      border-right: 7px solid #34558b;
      margin: 0 auto;
      z-index: -1;
      content: '';
    }
    > a {
      border: 1px solid black;
      border-bottom: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 1em !important;
      color: #000;
      height: 2rem;
    }
    > :nth-child(3) {
      margin-top: -0.01em;
      border-bottom: 1px solid black;
    }
    > a:first-child:hover ~ :nth-child(4):before {
      filter: brightness(90%);
      cursor: pointer;
    }
    > a:hover {
      filter: brightness(90%);
      cursor: pointer;
    }
  `,
  LinkWarp: styled(Link)`
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    &:active {
      color: black;
    }
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
  `,
  Warp: styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    &:active {
      color: black;
    }
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
  `,
}
