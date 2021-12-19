import React, { useEffect, useState } from 'react'
import { S } from './style'
import Write from '../../images/write.png'
import WriteModal from '../../components/WrtieModal'
import axios from 'axios'
import ReadBoard from '../../components/ReadBoard'
import Mountain from '../../images/mountain.png'
import Dog from '../../images/Dog.png'
import ChooseProfile from '../../components/ChooseProfile'
import Spinner from '../../components/Spinner'

function ClubInfo({ match }) {
  const ClubNameList = [
    { name: 'On', clubimg: '' },
    { name: 'Undefined', clubimg: '' },
    { name: 'Info', clubimg: '' },
    { name: 'Dms', clubimg: '' },
    { name: 'Submit', clubimg: '' },
    { name: '시나브로', clubimg: '' },
    { name: 'Esd', clubimg: '' },
    { name: 'Qss', clubimg: '' },
    { name: 'Vcc', clubimg: '' },
    { name: 'Gram', clubimg: '' },
    { name: '세미콜론', clubimg: '' },
    { name: 'Ns', clubimg: '' },
    { name: 'Up', clubimg: '' },
    { name: 'Modeep', clubimg: '' },
    { name: 'Flosvia', clubimg: '' },
    { name: 'Nonamed', clubimg: '' },
    { name: '대홍단', clubimg: '' },
    { name: 'Entry', clubimg: '' },
    { name: '또래상담부', clubimg: '' },
  ]
  const [OpenModal, SetOpenModal] = useState(false)
  const [Input, SetInput] = useState(false)
  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false)
  const [none, setNone] = useState(false)
  const [description, setDescription] = useState('더블클릭하여 수정해주세요')
  const [ProfileModal, SetProfileModal] = useState(false)
  const [bug, setbug] = useState(false)
  const [spinner, Setspinner] = useState(false)

  const updateInfo = state => {
    setUpdate(state)
  }

  const IntroduceChange = e => {
    setDescription(e.target.value)
    if (e.keyCode == 13) {
      SetInput(false)
      axios.post(
        `http://13.209.141.103:8080/board/oneline?oneline=${description}&author=${match.params.clubName}`
      )
    }
  }

  useEffect(async () => {
    Setspinner(true)
    try {
      const response = await axios.get(
        `http://13.209.141.103:8080/board/show?author=${match.params.clubName}`
      )
      setData(response.data)
      if (!response.data.boardDtoList.length) {
        setNone(true)
      } else setNone(false)
      for (let i = 0; i < ClubNameList.length; i++) {
        if (match.params.clubName == ClubNameList[i].name) {
          setbug(true)
          break
        }
        setbug(false)
      }
      if (response.data.oneline != '') setDescription(response.data.oneline)
    } catch (e) {
      console.log(e)
    }
    updateInfo()
    Setspinner(false)
  }, [update])

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <div>
          <S.Container
            style={{
              backgroundImage: `url(${Mountain})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {bug && (
              <S.Info>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '30px',
                    }}
                  >
                    <S.ProfileImage>
                      <img
                        onClick={() => {
                          SetProfileModal(true)
                        }}
                        src={
                          data.image
                            ? `data:image/jpeg;base64,${data.image}`
                            : Dog
                        }
                      />
                      <span>프로필 수정</span>
                    </S.ProfileImage>
                  </div>
                  <h1 style={{ textAlign: 'center', margin: '0px' }}>
                    {match.params.clubName}
                  </h1>
                  {Input ? (
                    <div
                      onKeyDown={IntroduceChange}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                        height: '70px',
                      }}
                    >
                      <S.IntroduceClubInput
                        style={{ height: '30px' }}
                        onChange={() => IntroduceChange}
                        placeholder="동아리를 한줄로 소개해주세요 !!"
                      />
                    </div>
                  ) : (
                    <div style={{ height: '70px', marginTop: '10px' }}>
                      <p
                        style={{ textAlign: 'center', margin: 0 }}
                        onDoubleClickCapture={() => SetInput(true)}
                      >
                        {description}
                      </p>
                    </div>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      width: '1000px',
                      marginTop: '10px',
                    }}
                  >
                    <img src={Write} width="15px" height="15px" />
                    <a
                      onClick={() => {
                        SetOpenModal(true)
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '10px',
                        marginLeft: '3px',
                      }}
                    >
                      작성하기
                    </a>
                  </div>
                </div>
              </S.Info>
            )}
          </S.Container>
          {OpenModal && (
            <WriteModal
              CloseModal={SetOpenModal}
              CLUBNAME={match.params.clubName}
              updateInfo={updateInfo}
            />
          )}
          {ProfileModal && (
            <ChooseProfile
              CloseModal={SetProfileModal}
              CLUBNAME={match.params.clubName}
              Original={data.image}
              updateInfo={updateInfo}
              update={update}
            />
          )}
          {none && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '7em',
              }}
            >
              게시물이 존재하지 않습니다.
            </div>
          )}
          {data.boardDtoList &&
            data.boardDtoList.map((data, index) => {
              return (
                <ReadBoard key={index} data={data} updateInfo={updateInfo} />
              )
            })}
        </div>
      )}
    </div>
  )
}

export default ClubInfo
