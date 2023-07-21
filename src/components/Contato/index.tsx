import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/Contato'
import * as Estilizado from '../../styles'
import { useState } from 'react'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeContato,
  email: emailContato,
  telefone: telefoneContato
}: Props) => {
  const dispatch = useDispatch()
  const [edicao, setEdicao] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <Estilizado.InputContato
        type="text"
        value={nomeContato}
        onChange={(e) => setNome(e.target.value)}
        disabled={!edicao}
      />
      <Estilizado.InputContato
        type="email"
        value={emailContato}
        onChange={(e) => setEmail(e.target.value)}
        disabled={!edicao}
      />
      <Estilizado.InputContato
        type="tel"
        disabled={!edicao}
        onChange={(e) => setTelefone(e.target.value)}
        value={telefoneContato}
      />
      {edicao ? (
        <>
          <Estilizado.ButtonEditarSalvar
            onClick={() => {
              dispatch(editar({ id, nome, email, telefone })), setEdicao(false)
            }}
          >
            Salvar
          </Estilizado.ButtonEditarSalvar>
        </>
      ) : (
        <>
          <Estilizado.ButtonEditarSalvar onClick={() => setEdicao(true)}>
            Editar
          </Estilizado.ButtonEditarSalvar>
        </>
      )}
      <Estilizado.ButtonRemover onClick={() => dispatch(remover(id))}>
        Remover
      </Estilizado.ButtonRemover>
    </>
  )
}

export default Contato
