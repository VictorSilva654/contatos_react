import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ContatoComponente from '../../components/Contato'

export const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <ul>
      {itens.map((contato) => (
        <li key={contato.id}>
          <ContatoComponente
            id={contato.id}
            nome={contato.nome}
            telefone={contato.telefone}
            email={contato.email}
          />
        </li>
      ))}
    </ul>
  )
}
