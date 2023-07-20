import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: ${variaveis.darkBlue};
  color: ${variaveis.white};
  border: none;
  width: 40%;
`
