# Store - Redux / Redux Saga
Loja virtual com a implementação <strong>Hooks, Redux e Redux Saga</strong>. O <strong>Redux</strong> com a finalidade de deixar o estado do carrinho compartilhável com todos os componentes da aplicação (adicionar ao carrinho, remover do carrinho, update da quantidade). Utilizei <strong>Redux Saga</strong> com a finalidade de middleware, fazendo validações de estoque e acessando a API para buscar informações detalhadas do produto antes da adição ao carrinho.

### Compilando:

1) cd store_redux_reduxsaga
2) yarn install
3) json-server --watch -p 3333 server.json
4) yarn start

![screenshot](https://user-images.githubusercontent.com/42494117/82837939-ffb17f80-9ea0-11ea-8f39-3126b99fd71d.png)
