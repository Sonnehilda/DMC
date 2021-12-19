import React, { useState, useRef } from 'react'
import { S } from './style'
import axios from 'axios'
import Nocheck from '../../images/nocheck.png'
import check from '../../images/check.png'
import NoEye from '../../images/eye.png'
import SlayerEye from '../../images/slayer-eye.png'
import Joinmodal from '../Joinmodal'

function Loginmodal({ CloseModal }) {
  const [Eye, setEye] = useState(false)
  const [Check, setCheck] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const onChangeLogin = e => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  function login(e) {
    e.preventDefault()
    axios
      .post('http://13.209.141.103:8080/api/authenticate', inputs)
      .then(resp => {
        alert('로그인 성공')
        localStorage.setItem('token', resp.data)
        axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data}`;
        CloseModal(false)
      })
      .catch(err => {
        alert('아이디 혹은 비밀번호가 틀립니다.')
      })
  }
  return (
    <div>
      {openModal ? (
        <Joinmodal CloseModal={CloseModal} />
      ) : (
        <S.Loginbg onSubmit={e => login(e)} onClick={() => CloseModal(false)}>
          <S.Loginmodaldiv onClick={e => e.stopPropagation()}>
            <div>
              <S.Loginp>로그인</S.Loginp>
              <S.Input
                name={'username'}
                placeholder="ID"
                onChange={onChangeLogin}
              />
              <br />
              <div style={{ position: 'relative' }}>
                <S.Input
                  name={'password'}
                  type={Eye ? 'text' : 'password'}
                  placeholder="PW"
                  onChange={onChangeLogin}
                />
                <S.EyeImg
                  onClick={() => setEye(!Eye)}
                  src={Eye ? NoEye : SlayerEye}
                />
              </div>
              <p style={{ display: 'flex', marginTop: '30px' }}>
                <S.CheckboxImg
                  onClick={() => setCheck(!Check)}
                  src={Check ? Nocheck : check}
                />
                아이디 저장
              </p>
              <S.Button type="submit">Login</S.Button>
              <br />
              <div style={{ textAlign: 'center' }}>
                <a>회원이 아니신가요? </a>
                <a
                  href="#"
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  클릭
                </a>
              </div>
            </div>
          </S.Loginmodaldiv>
        </S.Loginbg>
      )}
    </div>
  )
}
export default Loginmodal
