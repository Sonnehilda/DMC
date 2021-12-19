import React from 'react'
import Header from '../../components/Header'
import { S } from './style'
import People from '../../images/People.png'
import HyperLink from '../../images/HyperLink.png'

function About() {
  return (
    <S.Body>
      <Header />
      <S.Container>
        <h1>DMC 개발자</h1>
      </S.Container>
      <S.Container>
        <S.Upper>
          <a href="https://github.com/Josanghyeon" target="_blank">
            Github 방문
          </a>
          <img src={People}/>
        </S.Upper>
        <S.Lower>
          <h2>조상현</h2>
          <h3>프론트엔드 개발자</h3>
          <a href="https://github.com/Josanghyeon" target="_blank">
          <img src={HyperLink}></img>Github
          </a>
          
        </S.Lower>
      </S.Container>

      <S.Container>
        <S.Upper>
          <a href="https://github.com/Felierix" target="_blank">
            Github 방문
          </a>
          <img src={People}/>
        </S.Upper>
        <S.Lower>
          <h2>이진형</h2>
          <h3>프론트엔드 개발자</h3>
          <a href="https://github.com/Felierix" target="_blank">
          <img src={HyperLink}></img>Github
          </a>
          
        </S.Lower>
      </S.Container>
      
      <S.Container>
        <S.Upper>
          <a href="https://github.com/khcho0125" target="_blank">
            Github 방문
          </a>
          <img src={People}/>
        </S.Upper>
        <S.Lower>
          <h2>조경현</h2>
          <h3>백엔드 개발자</h3>
          <a href="https://github.com/khcho0125" target="_blank">
          <img src={HyperLink}></img>Github
          </a>
          
        </S.Lower>
      </S.Container>
    </S.Body>
  )
}

export default About