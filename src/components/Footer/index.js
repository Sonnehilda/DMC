import {S} from './style'
import githubicon from '../../images/githubicon.png'

function Footer (){
    return(
        <S.Contanier>
            <a href="https://github.com/Josanghyeon/DMC" target="_blank">
            <img style={{marginTop:'20px',cursor:'pointer'}} width="40px" src={githubicon} />
            </a>
            <S.Madeby>Backend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frontend</S.Madeby>
            <S.Madeby>조경현 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 조상현</S.Madeby>
            <S.Madeby>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이진형</S.Madeby>
            <S.Madep>@ Made 2021 ON</S.Madep>
        </S.Contanier>
    );
}
export default Footer