import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      email: "",
      cpf: Number,
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    (name === "nome") ? this.setState({
      [name]: value.toUpperCase()
    }) : this.setState({
      [name]: value
    })
  }

  render() {
    let nomeError = undefined;
    if (this.state.nome.length === 40) nomeError = "Limite de tamanho: 40";

    let emailError = undefined;
    if (this.state.email.length === 50) emailError = "Limite de tamanho: 50";

    let cpfError = undefined;
    if (this.state.cpf.length === 11) cpfError = "Limite de tamanho: 11";


    return (
      <section id="form">
        <fieldset id="personal-data-container" className="personal-data-container">
          <label>Nome:
            <input
              maxLength="40"
              name="nome"
              onChange={this.handleChange}
              placeholder="Digite seu nome"
              required
              type="text"
              value={this.state.nome}
            />
            <span>{nomeError ? nomeError : ""}</span>
          </label>
          <label>
            E-mail:
            <input
              maxLength="50"
              name="email"
              onChange={this.handleChange}
              placeholder="Digite seu e-mail"
              required
              type="email"
              value={this.state.email}
            />
            <span>{emailError ? emailError : ""}</span>
          </label>
          <label>
            CPF:
            <input
              maxLength="11"
              name="cpf"
              onChange={this.handleChange}
              placeholder="Digite seu CPF"
              required
              type="number"
              value={this.state.cpf}
            />
            <span>{cpfError ? cpfError : ""}</span>
          </label>
        </fieldset>
      </section>
    )
  }
}

export default Form;