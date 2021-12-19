import styled from 'styled-components'

export const S = {
  Joinbg: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
  Joinmodaldiv: styled.div`
    background-color: #ffffff;
    width: 450px;
    height: 650px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    > div {
      width: 330px;
    }
  `,
  Joinp: styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 36px;
    margin-bottom: 0px;
  `,
  Input: styled.input`
    all: unset;
    width: 310px;
    height: 48px;
    border-radius: 50px;
    background-color: rgba(112, 112, 112, 0.09);
    margin-top: 45px;
    padding-left: 20px;
  `,
  P: styled.p`
    display: table-cell;
    vertical-align: middle;
    width: 310px;
    height: 48px;
    padding-top:45px;
    padding-left: 20px;
  `,
  InputB: styled.input`
    all: unset;
    width: 310px;
    height: 48px;
    border-radius: 50px;
    background-color: rgba(112, 112, 112, 0.09);
    margin-top: 45px;
    padding-left: 20px;
  `,
  Button: styled.button`
    all: unset;
    background-color: #177aee;
    color: white;
    width: 330px;
    height: 48px;
    text-align: center;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 30px;
  `,
  EyeImg: styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: -34px;
    left: 290px;
    cursor: pointer;
  `,
  Abbutton: styled.button`
    all: unset;
    border-radius: 50px;
    background-color: #ffffff;
    width: 50px;
    height: 30px;
    text-align: center;
    position: absolute;
    top: -38px;
    left: 270px;
    cursor: pointer;
  `,
}
