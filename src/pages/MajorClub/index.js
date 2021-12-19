import React ,{ useEffect, useState} from 'react'
import { S } from './style'
import Club from '../../components/Club'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import Footer from '../../components/Footer'

function Clublist() {
  const [Data,SetData] = useState([]);
  const [Loding,SetLoding] =useState(false)
  useEffect(async () => {
    SetLoding(true)
    try {
      const response = await axios.get(
        `http://13.209.141.103:8080/board/mainboard`
      )
      SetData(response.data)
      console.log(response.data);
      //`data:image/jpeg;base64,${data.image}`
    } catch (e) {
      console.log(e)
    }
    SetLoding(false)
  }, [])
  const ClubNameList = [
    { name: 'On',clubimg: false},
    { name: 'Undefined',clubimg: false},
    { name: 'Info', clubimg: false},
    { name: 'Dms',  clubimg: false},
    { name: 'Submit', clubimg: false},
    { name: '시나브로',clubimg: false},
    { name: 'Esd',clubimg: false},
    { name: 'Qss', clubimg: false},
    { name: 'Vcc', clubimg: false},
    { name: 'Gram', clubimg: false},
    { name: '세미콜론', clubimg: false},
    { name: 'Ns',clubimg: false },
    { name: 'Up',  clubimg: false},
    { name: 'Modeep', clubimg: false},
    { name: 'Flosvia', clubimg: false},
    { name: 'Nonamed',clubimg: false},
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

export default Clublist
