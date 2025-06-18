# Sistema de Cadastros e Vendas

Este é um sistema completo para gerenciamento de cadastros de produtos, clientes e vendas, desenvolvido com **Node.js**, **MySQL** no backend e **HTML + TypeScript** no frontend.

## 🚀 Funcionalidades

- Cadastro de clientes
- Cadastro de produtos
- Listagem e edição de registros
- Gerenciamento de carrinho de compras
- Registro de vendas/pedidos
- Histórico de compras

## 🧱 Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- MySQL (banco de dados relacional)
- Sequelize ou MySQL2 (driver de acesso ao MySQL)

### Frontend
- HTML5
- TypeScript
- CSS3 (opcionalmente com frameworks como Bootstrap ou Tailwind)

## 📁 Estrutura do Projeto

/backend
├── controllers/
├── models/
├── routes/
├── database/
├── app.js
└── package.json

/frontend
├── pages/
├── login.html
├── cadastro.html
├── produtos.html
├── vendas.html
├── scripts/
├── login.ts
├── cadastro.ts
├── produtos.ts
├── vendas.ts
└── styles/

README.md

markdown
Copiar
Editar

## ⚙️ Como Executar

### Pré-requisitos

- Node.js (v18+)
- MySQL Server
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
Configure o banco de dados:

Crie um banco no MySQL chamado sistema_vendas e atualize o arquivo .env com suas credenciais:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=sistema_vendas
DB_PORT=3306
Instale as dependências:

bash
Copiar
Editar
cd backend
npm install
Execute o backend:

bash
Copiar
Editar
npm run dev
Acesse o frontend:

Abra os arquivos HTML em um servidor local (ex: com Live Server no VS Code) ou configure o frontend para rodar em localhost.

📌 Observações
As requisições do frontend são feitas via fetch para a API do backend.

As rotas da API seguem o padrão REST (GET, POST, PUT, DELETE).

✉️ Contato
Projeto desenvolvido por [Seu Nome ou Empresa].
