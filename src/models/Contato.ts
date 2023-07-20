class Contato {
  nome: string
  email: string
  telefone: string
  id: number

  constructor(id: number, nome: string, email: string, telefone: string) {
    this.email = email
    this.nome = nome
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
