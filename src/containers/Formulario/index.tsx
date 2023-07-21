import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Estilizado from '../../styles'
import { adicionar } from '../../store/reducers/Contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const submitFormulario = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(adicionar({ nome, email, telefone }))
  }

  return (
    <Estilizado.Form onSubmit={submitFormulario}>
      <Estilizado.Input
        type="text"
        value={nome}
        placeholder="Insira um nome"
        onChange={(evento) => setNome(evento.target.value)}
      />
      <Estilizado.Input
        type="email"
        value={email}
        placeholder="Insira um e-mail"
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <Estilizado.Input
        type="tel"
        placeholder="Insira um número de contato válido"
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <Estilizado.Button type="submit">Adicionar</Estilizado.Button>
    </Estilizado.Form>
  )
}

export default Formulario
