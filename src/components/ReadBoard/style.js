import styled from 'styled-components'

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7rem;
    margin-bottom: 7rem;
    > div {
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      width: 700px;
      padding: 40px;
    }
  `,
  Lower: styled.div`
    display: flex;
    justify-content: center;
    > img {
      width: 600px;
      height: 600px;
      object-fit: cover;
    }
  `,
  content: styled.div`
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  `,
  ThreeDotImg: styled.img`
    position: absolute;
    right: 430px;
    width: 25px;
    cursor: pointer;
  `,

  Dropdown: styled.div`
    position: absolute;
    right: 17.5rem;
    width: 8rem;
    > :nth-child(3):before {
      position: absolute;
      top: 0.4rem;
      left: -0.24rem;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 5px solid white;
      border-bottom: 5px solid transparent;
      margin: 0 auto;
      content: '';
    }
    > :nth-child(3):after {
      position: absolute;
      top: 0.4rem;
      left: -0.3rem;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 5px solid black;
      border-bottom: 5px solid transparent;
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
      font-size: 1rem;
      color: #000;
      height: 2rem;
    }
    > :nth-child(2) {
      margin-top: -0.01em;
      border-bottom: 1px solid black;
    }
    > a:first-child:hover ~ :nth-child(3):before {
      filter: brightness(90%);
      cursor: pointer;
    }
    > a:hover {
      filter: brightness(90%);
      cursor: pointer;
    }
  `,
}
