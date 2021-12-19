import React, { useState } from 'react'
import { S } from './style'
import axios from 'axios'

function ChooseProfile({ CloseModal, CLUBNAME, data, updateInfo, update }) {
  const [posthen, setposten] = useState({
    file: null,
    author: CLUBNAME,
  })
  function previewFile() {
    var preview = document.querySelector('#preview')
    var file = document.querySelector('#inputvalue').files[0]
    setposten({
      ...posthen,
      file: file,
    })
    var reader = new FileReader()
    reader.addEventListener(
      'load',
      function () {
        preview.src = reader.result
      },
      false
    )
    if (file) reader.readAsDataURL(file)
  }
  function changePicture() {
    const formData = new FormData()
    formData.append('file', posthen.file)
    formData.append('author', posthen.author)
    axios
      .post('http://13.209.141.103:8080/board/pictures', formData)
      .then(resp => {
        alert('성공적으로 업로드 되었습니다')
      })
      .catch(err => {
        alert('업로드실패')
      })
  }

  const Upload = () => {
    changePicture()
    CloseModal(false)
    updateInfo(!update)
  }

  return (
    <S.Modalbg
      onClick={() => {
        CloseModal(false)
      }}
    >
      <S.ModalDiv onClick={e => e.stopPropagation()}>
        <S.previewImg src={`data/jpeg;base64,${data}`} id="preview" />
        <h3>프로필사진</h3>
        <p>사진은 150x150 1:1비율로 들어갑니다.</p>
        <input
          style={{ marginLeft: '45px' }}
          id="inputvalue"
          type="file"
          accept="image/*"
          onChange={previewFile}
        />
        <br />
        <S.AnswerButton onClick={Upload}>확인</S.AnswerButton>
      </S.ModalDiv>
    </S.Modalbg>
  )
}

export default ChooseProfile
