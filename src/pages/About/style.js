import styled from 'styled-components'

export const S = {
  Body: styled.div`
  >:nth-child(2) {
    padding-bottom: 0;
    margin-top: 3.5rem;
    height: 7.5rem;
    font-size: 1.25rem;
  }
  >:last-child {
    margin-bottom: 3.5rem;
  }
  `,

  Container: styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 50rem; height: 12.5rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  `,

  Upper: styled.div`
    > a {
      pointer-events: auto;
      filter: opacity(0%);

      position: absolute;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      width: 12.5rem; height: 12.5rem;
      transition: 0.25s all;
      z-index: 1;
    }
    > img {
      pointer-events: none;

      width: 12.5rem;
      height: 12.5rem;
      object-fit: cover;
      border-radius: 70%;
      border: 1px solid black;
      transition: 0.25s all;
    }
    > :hover {
      filter: opacity(100%);
    }
    > :hover + img {
      filter: brightness(75%);
    }
  `,

  Lower: styled.div`
  color: #777;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > a {
    color: #00C;
    text-decoration: none;
  }
  > h2 {
    color: black;
    font-size: 2rem;
    margin: 0;
  }
  > h3 {
    margin: 0;
  }
  > a img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
    filter: contrast(75%);
  }
  margin-left: 2.5rem;
  width: 10rem;height: 11.25rem;
  `,
}