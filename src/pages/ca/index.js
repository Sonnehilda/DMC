import React ,{useState,useEffect} from 'react'
import { S } from '../MajorClub/style'
import Club from '../../components/Club'
import axios from 'axios';
import Spinner from '../../components/Spinner'
import Footer from '../../components/Footer';

function Ca() {
  const [Data,SetData] = useState([]);
  const [Loding,SetLoding] =useState(false)
  useEffect(async () => {
    SetLoding(true)
    try {
      const response = await axios.get(
        `http://13.209.141.103:8080/board/mainboard`
      )
      SetData(response.data)
    } catch (e) {
      console.log(e)
    }
    SetLoding(false)
  }, [])
  const ClubNameList = [
    { name: '대홍단',clubimg: false},
    { name: 'Entry',clubimg: false},
    { name: '또래상담부', clubimg: false},
  ]
  return (
    <div>
    <S.Wrapper>
      {Loding ? 
      <Spinner />:
      (ClubNameList.map((props, index) => {
        return <Club key={index} Data={Data} props={props} />
      }))}
    </S.Wrapper>
    <Footer/>
    </div>
  )
}

export default Ca
