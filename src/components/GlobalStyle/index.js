import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Noto Sans KR', sans-serif;
        &::-webkit-scrollbar{display:none;}
    }
`

export default GlobalStyle
