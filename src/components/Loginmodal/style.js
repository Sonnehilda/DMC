import styled from 'styled-components'

export const S = {
  Loginbg: styled.form`
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
  Loginmodaldiv: styled.div`
    background-color: #ffffff;
    width: 450px;
    height: 650px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
  `,
  Loginp: styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 126px;
  `,
  Input: styled.input`
    all: unset;
    width: 310px;
    height: 48px;
    border-radius: 50px;
    background-color: rgba(112, 112, 112, 0.09);
    margin-top: 50px;
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
    margin-top: 40px;
    margin-bottom: 15px;
  `,
  CheckboxImg: styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 14px;
  `,
  Div: styled.div`
    text-align: center;
    margin-top: 15px;
  `,
  EyeImg: styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 64px;
    left: 290px;
    cursor: pointer;
  `,
}
