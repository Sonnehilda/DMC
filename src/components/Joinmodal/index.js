import React, { useState, useEffect } from 'react'
import { S } from './style'
import NoEye from '../../images/eye.png'
import SlayerEye from '../../images/slayer-eye.png'
import axios from 'axios'
import Spinner from '../Spinner';

function Joinmodal({ CloseModal }) {
  const [Eye, setEye] = useState(false)
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    classnum: '',
    email: '',
    classname: '',
  })
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  const [authnumber, Setauthnumber] = useState('')
  const [auth, setauth] = useState(false)
  const [nowverify, setnowverify] = useState(true)
  const onChangeJoin = e => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  function join(e) {
    e.preventDefault()
    if (inputs.classnum.length != 4) alert('학번은 4글자로 적어주세요')
    else if (inputs.password.length > 12 && inputs.password.length < 8)
      alert('비밀번호는 12글자이하 8글자 이상으로 작성해주세요')
    else if (inputs.username.length > 12 && inputs.username.length < 8)
      alert('아이디는 12글자이하 8글자 이상으로 작성해주세요')
    else if (auth == false) alert('이메일 인증을 해주세요')
    else {
      axios
        .post('http://13.209.141.103:8080/member/signup', inputs)
        .then(resp => {
          CloseModal(false)
          alert('회원가입 성공')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) setSeconds(parseInt(seconds) - 1)
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown)
        } else {
          setMinutes(parseInt(minutes) - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])

  function expansive(e) {
    setMinutes(5)
    setSeconds(0)
    if (document.querySelector('#inputvalue').value == authnumber) {
      alert('인증성공!')
      setauth(true)
      setnowverify(true)
    } else alert('인증실패')
  }
  const [onspinner,setonspinner] = useState(false);
  function verify() {
    setonspinner(true)
    axios
      .get(`http://13.209.141.103:8080/email?email=${inputs.email}`)
      .then(resp => {
        
        Setauthnumber(resp.data)
        setnowverify(false)
        alert('전송성공')
        setonspinner(false)
      })
      .catch(err => {
        alert('올바르지 않은 이메일 형식입니다')
        setonspinner(false)
      })
  }
  return (
    <S.Joinbg onClick={() => CloseModal(false)}>
      <S.Joinmodaldiv onClick={e => e.stopPropagation()}>
        <div>
          <S.Joinp>회원가입</S.Joinp>
          <S.Input
            name={'classnum'}
            placeholder="학번을 입력해주세요."
            onChange={onChangeJoin}
          />
          <br />
          <S.Input
            name={'classname'}
            placeholder="이름을 입력해주세요."
            onChange={onChangeJoin}
          />

          {auth?(<S.P>{inputs.email}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          인증완료</S.P>):(
          (nowverify ? (
            (onspinner?
              (<Spinner />):
            (<div>
              <S.Input
                name={'email'}
                placeholder="이메일을 입력해주세요"
                onChange={onChangeJoin}
              />
              <div style={{ position: 'relative' }}>
                <S.Abbutton onClick={verify}>전송</S.Abbutton>
              </div>
            </div>))
          ) : (
            <div>
              <S.InputB
                id="inputvalue"
                placeholder={`${minutes}:${
                  seconds < 10 ? `0${seconds}` : seconds
                }`}
              />
              <div style={{ position: 'relative' }}>
                <S.Abbutton onClick={expansive}>인증</S.Abbutton>
              </div>
            </div>
          ))
          )}

          <S.Input
            name={'username'}
            placeholder="아이디를 입력해주세요."
            onChange={onChangeJoin}
          />
          <S.Input
            name={'password'}
            placeholder="비밀번호를 입력해주세요."
            type={Eye ? 'text' : 'password'}
            onChange={onChangeJoin}
          />
          <div style={{ position: 'relative' }}>
            <S.EyeImg
              onClick={() => setEye(!Eye)}
              src={Eye ? NoEye : SlayerEye}
            />
          </div>
          <S.Button onClick={join}>Sign Up</S.Button>
        </div>
      </S.Joinmodaldiv>
    </S.Joinbg>
  )
}

export default Joinmodal
