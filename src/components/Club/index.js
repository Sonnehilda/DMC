import React from 'react'
import { S } from './style'
import { Link } from 'react-router-dom'
import Mountain from '../../images/mountain.png'
import Leaf from '../../images/leaf.png'
import ClubInfo from '../../pages/ClubInfo'

function Club({ Data,props }) {
  /*{Data.map((Data)=>{
      if(props.name == Data.author) {
        props.clubimg = true;
    }
  })}*/
  let i;
  for(i=0;i<Data.length;i++){
    if(props.name == Data[i].author) {
      props.clubimg = true;
      console.log(i);
      break;
    }
  }
  return (
    <S.Container>
      <S.WarpLink to={`/ClubInfo/${props.name}`}>
        <div style={{ width: '300px', height: '250px', overflow: 'hidden' }}>
          <S.Upper>
            <img src={props.clubimg ? `Data:image/jpeg;base64,${Data[i].image}`:Leaf} />
          </S.Upper>
        </div>
        <S.Lower>
          <S.LowerText>
            <S.IntroduceClub>{props.name}</S.IntroduceClub>
          </S.LowerText>
        </S.Lower>
      </S.WarpLink>
    </S.Container>
  )
}

export default Club
