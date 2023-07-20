import * as Estilizado from './styles'

const Formulario = () => (
  <Estilizado.Form>
    <Estilizado.Input type="text" placeholder="Insira um nome" />
    <Estilizado.Input type="email" placeholder="Insira um e-mail" />
    <Estilizado.Input
      type="tel"
      placeholder="Insira um número de contato válido"
    />
    <Estilizado.Button type="submit">Cadastrar novo contato</Estilizado.Button>
  </Estilizado.Form>
)

export default Formulario
