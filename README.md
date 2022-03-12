<h3 align="center">
   Store - Redux / Redux Saga
</h3>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<img alt="Layout" src="https://user-images.githubusercontent.com/42494117/82837939-ffb17f80-9ea0-11ea-8f39-3126b99fd71d.png">

## 👨🏻‍💻 Projeto

Loja virtual

Loja virtual com a implementação de Hooks, Redux e Redux Saga. O Redux com a finalidade de deixar o estado do carrinho compartilhável com todos os componentes da aplicação (adicionar ao carrinho, remover do carrinho, update da quantidade). Utilizei Redux Saga com a finalidade de middleware, fazendo validações de estoque e acessando a API para buscar informações detalhadas do produto antes da adição ao carrinho.

## 🚀 Tecnologias

Esta aplicação foi desenolvida com as seguintes tecnologias:


- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Immer](https://github.com/immerjs/immer/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## 💻 Instalação, execução e desenvolvimento

### Pré-requisitos

- [React Native](https://reactnative.dev/)

**Faça um clone desse repositório e acesse o diretório**

```bash
git clone https://github.com/mjsil/store_redux_reduxsaga.git
```

### Web

```bash
# Entre na pasta do projeto
$ cd store_redux_reduxsaga
# Instale as dependências
$ yarn install ou npm install
# Execute o JSON Server 
$ json-server --watch -p 3333 server.json
# Tudo pronto para iniciar o projeto
$ yarn start & yarn android
```

## 🤔 Como contribuir

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.
$ gh repo fork mjsil/store_redux_reduxsaga
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd store_redux_reduxsaga
# Crie uma branch com sua feature
$ git checkout -b minha-feature
# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'
# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by [MJSIL](https://www.linkedin.com/in/maur%C3%ADlio-j-silveira-4bb52b16a)
