import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle, { Container, Titulo } from './styles'
import Formulario from './containers/Formulario'
import { ListaContatos } from './containers/ListaContatos'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Titulo>Cadastro de contatos</Titulo>
        <Formulario />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
