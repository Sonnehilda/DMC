import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    flex-wrap: wrap;
    margin-top: 100px;
    display: flex;
    align-items: center;
    height: max-content;
    > :nth-child(1n) {
      margin-bottom: 8.4rem;
    }
  `,
}
