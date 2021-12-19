import React, { useState } from 'react'
import { S } from './style'
import axios from 'axios'
import ClubInfo from '../../pages/ClubInfo'

function EditModal({ CloseModal, data, updateBoard }) {
  const [Text, SetText] = useState({
    image: data.image,
    title: data.title,
    content: data.content,
    id: data.id,
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
  const editData = () => {
    console.log(Text);
    const formData = new FormData()
    formData.append('image', Text.image)
    formData.append('title', Text.title)
    formData.append('content', Text.content)
    formData.append('id', Text.id)
    axios
      .post('http://13.209.141.103:8080/board/edit', formData)
      .then(res => {
        alert('게시물이 수정되었습니다')
      })
      .catch(err => {
        alert('error')
      })
  }

  const FormSubmit = () => {
    editData()
    CloseModal(false)
    updateBoard(!ClubInfo.update)
  }

  return (
    <S.WriteModalbg onClick={() => CloseModal(false)}>
      <S.WriteModaldiv onClick={e => e.stopPropagation()}>
        <h2>게시물 수정하기</h2>
        <S.titleInput
          placeholder="제목을 입력해주세요"
          onChange={onChange}
          value={Text.title}
          name={'title'}
        />
        <S.InputTextArea
          placeholder="내용을 입력해주세요"
          value={Text.content}
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

export default EditModal