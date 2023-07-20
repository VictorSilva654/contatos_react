import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle, { Container, Titulo } from './styles'
import Formulario from './containers/Formulario'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Titulo>Cadastro de contatos</Titulo>
        <Formulario />
      </Container>
    </Provider>
  )
}

export default App
