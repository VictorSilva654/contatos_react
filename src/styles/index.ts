import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
`

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 767px;
  width: 100%;
`

export const Titulo = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 40px 0;
  font-weight: bold;
`

export default GlobalStyle
