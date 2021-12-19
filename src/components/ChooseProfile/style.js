import styled from 'styled-components'

export const S = {
  Modalbg: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 40;
  `,
  ModalDiv: styled.div`
    background-color: #ffffff;
    width: 450px;
    height: 500px;
    text-align: center;
    border-radius: 6px;
  `,
  previewImg: styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 1px solid black;
    margin-top: 50px;
    border-radius: 70%;
  `,
  AnswerButton: styled.button`
    all: unset;
    margin-top: 70px;
    width: 380px;
    height: 40px;
    border-radius: 50px;
    color: #ffffff;
    background-color: #34558b;
    cursor: pointer;
  `,
}
