# Ecommerce API

API Rest para ecommerce de loja com autenticação JWT, banco de dados em memória, documentação Swagger e arquitetura em camadas.

## Funcionalidades
- Login administrador
- Login atendente
- Adicionar produto
- Registro de preço do produto
- Registro de imagem do produto
- Deletar produto
- Barra de pesquisa de produtos
- Adicionar produtos ao carrinho
- Progressão por pontuação

## Autenticação
A autenticação é feita via JWT e é obrigatória para acessar as funcionalidades da API.

## Documentação
A documentação dos endpoints está disponível via Swagger em `/swagger`.

## Estrutura
- `src/routes`: Rotas da API
- `src/controllers`: Lógica dos endpoints
- `src/service`: Regras de negócio
- `src/model`: Modelos de dados
- `resources`: Documentação Swagger

## Como rodar
1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`
3. Acesse a documentação: [http://localhost:3000/swagger](http://localhost:3000/swagger)
