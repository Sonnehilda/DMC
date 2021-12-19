import React, { useState, useRef, useEffect, useDebugValue } from 'react'
import { S } from './style'
import axios from 'axios'
import Dog from '../../images/Dog.png'
import ClubInfo from '../../pages/ClubInfo'

function WriteModal({ CloseModal, CLUBNAME, updateInfo }) {
  const [Text, SetText] = useState({
    image: null,
    title: '동아리원을 모집합니다.',
    content: '',
    author: CLUBNAME,
  })

  function onChange(e) {
    const { name, value } = e.target
    if (name == 'image') {
      SetText({
        ...Text,
        [name]: e.target.files[0],
      })
    } else {
      SetText({
        ...Text,
        [name]: value,
      })
    }
  }

  const appendData = () => {
    const formData = new FormData()
    formData.append('image', Text.image)
    formData.append('title', Text.title)
    formData.append('content', Text.content)
    formData.append('author', Text.author)
    axios
      .post('http://13.209.141.103:8080/board/post', formData)
      .then(res => {
        alert('게시물이 추가되었습니다.')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const FormSubmit = () => {
    appendData()
    CloseModal(false)
    updateInfo(!ClubInfo.update)
  }

  return (
    <S.WriteModalbg onClick={() => CloseModal(false)}>
      <S.WriteModaldiv onClick={e => e.stopPropagation()}>
        <h2>게시물 만들기</h2>
        <S.titleInput
          placeholder="제목을 입력해주세요"
          onChange={onChange}
          name={'title'}
        />
        <S.InputTextArea
          placeholder="내용을 입력해주세요"
          onChange={onChange}
          name={'content'}
        />
        <div style={{ marginLeft: '12px', textAlign: 'start' }}>
          <input
            accept="image/*"
            multiple
            name={'image'}
            onChange={onChange}
            type="file"
          />
        </div>
        <S.AnswerButton onClick={FormSubmit}>확인</S.AnswerButton>
      </S.WriteModaldiv>
    </S.WriteModalbg>
  )
}

export default WriteModal