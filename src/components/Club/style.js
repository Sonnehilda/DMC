import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Container: styled.span`
    margin-left: 150px;
    > a {
      display: inline-flex;
      flex-direction: column;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
      text-decoration: none;
    }
  `,

  Upper: styled.div`
    display: inline-flex;
    width: 300px;
    height: 250px;
    border-bottom: 0px solid transparent;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transition: all 0.3s ease-in-out;
    > :hover {
      filter: brightness(80%);
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
    > img {
      transition: all 400ms;
      width: 100%;
      object-fit: cover;
    }
  `,

  Lower: styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 300px;
    height: 4.7em;
    background-color: rgba(52, 85, 139, 0.7);
  `,

  LowerText: styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `,

  IntroduceClub: styled.h4`
    margin-bottom: 7px;
    margin-left: 5px;
    margin-top: 8px;
    color: white;
    &:active {
      color: white;
    }
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
  `,
  Details: styled.div`
    display: flex;
    > div {
      font-size: 12px;
      width: 5.35em;
      height: 1.5em;
      text-align: center;
      margin-top: 7px;
      margin-left: 30px;
      border-radius: 5em;
      background-color: rgba(255, 255, 255, 1);
      color: #34558b;
    }
  `,
  WarpLink: styled(Link)`
    &:active {
      color: black;
    }
    &:visited {
      color: white;
    }
  `,
}
