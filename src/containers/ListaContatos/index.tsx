import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Email</th>
      </tr>
      {itens.map((contato) => (
        <tr key={contato.id}>
          <td>{contato.nome}</td>
          <td>{contato.telefone}</td>
          <td>{contato.email}</td>
        </tr>
      ))}
    </table>
  )
}
