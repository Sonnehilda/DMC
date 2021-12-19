import styled from 'styled-components'

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    height: 320px;
  `,
  Info: styled.div`
    width: 900px;
    padding: 20px;
    display: flex;
    justify-content: center;
  `,
  IntroduceClubInput: styled.input`
    all: unset;
    width: 350px;
    padding-left: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  `,
  ProfileImage: styled.div`
    > img {
    pointer-events: auto;
    cursor: pointer;
    border-radius: 70%;
    object-fit: cover;
    width: 150px;
    height: 150px;
    border: 1px solid black;
    transition: 0.25s all;
    }
    > :hover {
      filter: brightness(75%);
    }
    > :hover ~ span {
      filter: opacity(100%);
    }
    > span {
      pointer-events: none;

      filter: opacity(0%);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 150px;
      display: inline-flex;
      align-items: center;
      margin: 0 auto;
      color: white;
      transition: 0.25s all;
    }
  `,
}