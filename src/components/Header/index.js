import React, { Fragment, useState, useEffect } from 'react'
import Loginmodal from '../Loginmodal'
import { S } from './style'
import { Link } from 'react-router-dom'
import Mypage from '../../images/마이페이지.png'
import FirstLogo from '../../images/First_Logo.png'

function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [height, setHeight] = useState(60)
  const [DropDown, SetDropDown] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) setHeight(40)
      else setHeight(60)
    })
  }, [])

  return (
    <S.MainHeader height={height}>
      <S.LogoNav>
        <S.Warp exact to="/MajorClub">
          <img width="36px" src={FirstLogo} />
          <a
            style={{ marginLeft: '9px', fontSize: '20px', fontWeight: 'bold' }}
          >
            DMC
          </a>
        </S.Warp>
      </S.LogoNav>
      <S.Nav>
        <Fragment>
          <S.LinkWarp exact to="/MajorClub">
            전공 동아리
          </S.LinkWarp>
          <S.LinkWarp exact to="/Ca">
            창체 동아리
          </S.LinkWarp>
          {localStorage.getItem('token') ? (
            <S.Profile
              onMouseEnter={() => SetDropDown(true)}
              onMouseLeave={() => SetDropDown(false)}
              onClick={() => SetDropDown(false)}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img width="34px" src={Mypage} />
                <S.Mypage>1115 조상현</S.Mypage>
              </div>
              {DropDown && (
                <S.Dropdown>
                  <Link exact to="/MyPage">
                    마이페이지
                  </Link>
                  <Link exact to="/About">
                    개발자 소개
                  </Link>
                  <a onClick={() => localStorage.removeItem('token')}>
                    로그아웃
                  </a>
                  <div></div>
                </S.Dropdown>
              )}
            </S.Profile>
          ) : (
            <a
              style={{ color: 'white', fontSize: '16px', cursor: 'pointer' }}
              onClick={() => {
                setOpenModal(true)
              }}
            >
              로그인/회원가입
            </a>
          )}
        </Fragment>
      </S.Nav>
      {openModal && <Loginmodal CloseModal={setOpenModal} />}
    </S.MainHeader>
  )
}

export default Header
