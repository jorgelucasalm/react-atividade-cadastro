import "./style.css";

const Form = () => {
  return (
    <section className="section-form">
      <div className="description">
        <h1>Cadastro</h1>
        <p>Preencha os dados abaixo para começar</p>
      </div>
      <div className="form">
        <label>
          <input type="text" placeholder="Nome" />
        </label>
        <label>
          <input type="text" placeholder="Sobrenome" />
        </label>
        <label>
          <input type="email" placeholder="E-mail" />
        </label>
        <label>
          <input type="password" placeholder="Senha" />
        </label>
        <input type="button" value="Concluir Cadastro" />
      </div>
    </section>
  );
};

export default Form;
