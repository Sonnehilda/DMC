import styled from 'styled-components'

export const S = {
  WriteModalbg: styled.div`
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
  WriteModaldiv: styled.div`
    background-color: #ffffff;
    width: 650px;
    height: 450px;
    border-radius: 6px;
    text-align: center;
  `,
  InputTextArea: styled.textarea`
    resize: none;
    font-family: 'Noto Sans KR', sans-serif;
    width: 620px;
    height: 210px;
    padding: 5px;
  `,
  AnswerButton: styled.button`
    all: unset;
    cursor: pointer;
    padding: 12px;
    border-radius: 50px;
    width: 600px;
    color: white;
    margin-top: 15px;
    background-color: #2123f3;
  `,
  titleInput: styled.input`
    font-family: 'Noto Sans KR', sans-serif;
    width: 620px;
    margin: 5px;
    padding: 5px;
  `,
}
