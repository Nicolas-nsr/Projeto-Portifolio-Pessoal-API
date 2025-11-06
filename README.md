🛍️ E-commerce API

API RESTful para gerenciamento completo de uma loja virtual com autenticação JWT, documentação Swagger e arquitetura em camadas.
Inclui operações para usuários, produtos, categorias, carrinho, pedidos e pagamentos.

🚀 Funcionalidades Principais

👤 Cadastro e autenticação de usuários (JWT)

🛒 Gerenciamento de produtos e categorias

🧺 Carrinho de compras persistente

📦 Criação e controle de pedidos

💳 Processamento e consulta de pagamentos

🔐 Controle de acesso (usuário comum x administrador)

🧾 Documentação interativa via Swagger UI

🔐 Autenticação

A autenticação é feita com JWT (JSON Web Token).
Para acessar endpoints protegidos, envie o token no header:

Authorization: Bearer <seu_token_jwt>

📡 Endpoints Principais
👤 Usuários
Método	Endpoint	Descrição
POST	/users	Criar novo usuário
GET	/users/{id}	Obter dados do usuário
PUT	/users/{id}	Atualizar dados do usuário
DELETE	/users/{id}	Remover conta
POST	/login	Autenticar usuário (JWT)
🛒 Produtos e Categorias
Método	Endpoint	Descrição
GET	/products	Listar produtos (filtros e paginação)
GET	/products/{id}	Obter detalhes de um produto
POST	/products	Adicionar novo produto (somente admin)
PUT	/products/{id}	Atualizar produto
DELETE	/products/{id}	Remover produto
GET	/categories	Listar categorias disponíveis
🧺 Carrinho de Compras
Método	Endpoint	Descrição
POST	/cart	Criar ou recuperar carrinho
GET	/cart	Listar conteúdo do carrinho
POST	/cart/items	Adicionar item ao carrinho
PUT	/cart/items/{id}	Atualizar quantidade de item
DELETE	/cart/items/{id}	Remover item do carrinho
📦 Pedidos
Método	Endpoint	Descrição
POST	/orders	Criar pedido a partir do carrinho
GET	/orders	Listar pedidos do usuário autenticado
GET	/orders/{id}	Detalhar um pedido específico
PUT	/orders/{id}/status	Atualizar status (somente admin)
💳 Pagamentos
Método	Endpoint	Descrição
POST	/payments	Iniciar pagamento de um pedido
GET	/payments/{id}	Consultar status do pagamento
🧱 Estrutura do Projeto
src/
├── routes/        # Definição das rotas da API
├── controllers/   # Lógica dos endpoints (camada de controle)
├── services/      # Regras de negócio
├── models/        # Estruturas e entidades da aplicação
├── middleware/    # Autenticação e validações
└── config/        # Configurações gerais (JWT, banco, etc.)

resources/
└── swagger/       # Documentação Swagger (swagger.json)

🧾 Documentação

Acesse a documentação interativa pelo Swagger UI:

👉 http://localhost:3000/swagger

🧰 Como Rodar o Projeto

Instale as dependências

npm install


Inicie o servidor

npm start


Acesse a API

http://localhost:3000


Visualize a documentação Swagger

http://localhost:3000/swagger

🧪 Tecnologias Utilizadas

Node.js / Express

JWT (JSON Web Token)

Swagger / OpenAPI 3.0

Arquitetura em camadas (Controller → Service → Model)

Banco em memória (mock)