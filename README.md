
# Ecommerce API

API Rest para ecommerce de loja com autenticação JWT, banco de dados em memória, documentação Swagger e arquitetura em camadas.

## Funcionalidades
- Login administrador
- Adicionar produto (com id único)
- Registro de preço do produto
- Deletar produto
- Barra de pesquisa de produtos
- Adicionar produtos ao carrinho
- Finalizar pedido

## Autenticação
A autenticação é feita via JWT e é obrigatória para acessar as funcionalidades da API.

## Endpoints principais
- `POST /api/login/admin` — Login do administrador
- `POST /api/product` — Adicionar produto
- `PUT /api/product/:id/price` — Atualizar preço do produto
- `DELETE /api/product/:id` — Deletar produto
- `GET /api/product/search?q=...` — Pesquisar produtos
- `POST /api/cart/add` — Adicionar produto ao carrinho
- `POST /api/cart/checkout` — Finalizar pedido

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
