import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

export const Titulo = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 40px 0;
  font-weight: bold;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`

export const Input = styled.input`
  margin-bottom: 16px;
  text-align: center;
  border: none;
  border-bottom: 1px solid ${variaveis.black};
  padding: 8px;
  font-size: 16px;
  width: 100%;
`

export const InputContato = styled.input`
  margin-bottom: 16px;
  text-align: center;
  border: none;
  border-bottom: 1px solid ${variaveis.black};
  padding: 8px;
  font-size: 12px;
  width: 300px;
  margin-right: 20px;
  display: inline;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: ${variaveis.darkBlue};
  color: ${variaveis.white};
  border: none;
  width: 40%;
`

export const ButtonEditarSalvar = styled.button`
  cursor: pointer;
  padding: 4px;
  background-color: ${variaveis.green};
  color: ${variaveis.white};
  border: none;
  width: 120px;
  margin: 0 8px 32px 0;
`

export const ButtonRemover = styled(ButtonEditarSalvar)`
  background-color: ${variaveis.red};
`

export default GlobalStyle
