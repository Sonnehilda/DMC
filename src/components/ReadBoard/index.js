import React, { useState } from 'react'
import { S } from './style'
import ThreeDot from '../../images/threedot.png'
import axios from 'axios'
import EditModal from '../EditModal'

function ReadBoard({ data, updateInfo }) {
  const [DropDown, SetDropDown] = useState(false)
  const [OpenModal, SetOpenModal] = useState(false)
  const date = data.createDate.substring(0, 10)

  function Delete() {
    axios
      .post(`http://13.209.141.103:8080/board/delete?id=${data.id}`)
      .then(resp => {
        alert('삭제 성공 !')
        updateInfo(!updateInfo)
      })
      .catch(err => {
        alert('오류 삭제 실패 !')
      })
  }

  const handleClickOutside = (event) => {
    if (event.target.id !== "img" && event.target.id !== "dropdown") SetDropDown(false);
  };
  document.addEventListener("mousedown", handleClickOutside);

  return (
    <div>
      <S.Container>
        <div>
          <S.content style={{ paddingTop: '0px' }}>
            <div style={{ textAlign: 'start' }}>
              {data.title}
              <h6 style={{ margin: 0, color: 'rgba(112,112,112,0.7)' }}>
                {date}
              </h6>
            </div>
            <S.ThreeDotImg
              id="img"
              src={ThreeDot}
              onMouseUp={() => SetDropDown(!DropDown)}
            />
            {DropDown && (
              <S.Dropdown id="dropdown">
                <a id="dropdown" onClick={() => SetOpenModal(true)}>수정하기</a>
                <a id="dropdown" onClick={Delete}>삭제하기</a>
                <div></div>
              </S.Dropdown>
            )}
          </S.content>
          <p>{data.content}</p>
          <S.Lower>
            <img
              width="400px"
              src={`data:image/jpeg;base64,${data.file}`}
              alt="오류"
            />
          </S.Lower>
        </div>
      </S.Container>
      {OpenModal && <EditModal CloseModal={SetOpenModal} data={data} updateInfo={updateInfo}/>}
    </div>
  )
}

export default ReadBoard