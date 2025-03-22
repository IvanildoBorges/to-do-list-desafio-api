# To-Do List API

Backend para gerenciamento de tarefas com suporte a operações CRUD, seguindo a arquitetura RESTful.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para criação de APIs
- **Typescript** - Tipagem estática para JavaScript
- **DotENV** - Gerenciamento de variáveis de ambiente
- **CORS** - Controle de acesso entre origens diferentes
- **Express Rate Limit** - Limitação de requisições para segurança
- **Helmet** - Proteção contra vulnerabilidades na API
- **Morgan** - Logger de requisições HTTP
- **PostgreSQL** - Banco de dados relacional
- **XSS** - Prevenção contra Cross-Site Scripting
- **Zod** - Validação de schemas e entrada de dados
- **Prisma** - ORM para banco de dados
- **Nodemon** - Atualização automática durante o desenvolvimento
- **TS Node** - Execução de TypeScript sem necessidade de compilação manual

## 📌 Resumo

A **To-Do List API** é uma aplicação backend desenvolvida para gerenciar tarefas. A API permite criar, ler, atualizar e excluir tarefas, garantindo segurança e eficiência na manipulação de dados. Foi projetada seguindo boas práticas de desenvolvimento e conta com validação de dados e proteção contra ataques comuns.

## 🛠️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a API no seu ambiente local:

### 1️⃣ Clonar o repositório

```bash
git clone link_do_repositorio_da_api
cd to-do-list-desafio-api
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Configurar o Prisma ORM

Inicializar o Prisma ORM:
```bash
npx prisma init
```

Isso criará um diretório `prisma/` com um arquivo `schema.prisma` para configurar o banco de dados e também um arquivo `.env` na raiz do projeto.

Instalar o cliente Prisma para que a aplicação possa interagir com o banco de dados:
```bash
npm install @prisma/client
```

### 4️⃣ Criar as tabelas no banco de dados

Rodar a migração para criar as tabelas definidas no Prisma:
```bash
npx prisma migrate dev
```

Caso queira visualizar o banco de dados e os registros:
```bash
npx prisma studio
```

### 5️⃣ Executar o projeto

```bash
npm run dev
```

A API estará rodando localmente em `http://localhost:3000` (ou a porta definida no arquivo `.env`).

## 📖 Endpoints da API

| Método  | Rota             | Descrição                        |
|---------|----------------|--------------------------------|
| GET     | `/tarefas`      | Lista todas as tarefas        |
| GET     | `/tarefas/:id`  | Busca uma tarefa pelo ID      |
| POST    | `/tarefas`      | Cria uma nova tarefa          |
| PUT     | `/tarefas/:id`  | Atualiza uma tarefa existente |
| DELETE  | `/tarefas/:id`  | Remove uma tarefa             |
| DELETE  | `/tarefas/all`  | Remove todas as tarefas       |

## 🛡️ Segurança e Proteção

A API conta com medidas de segurança como:
- **Helmet** para proteção contra ataques comuns
- **Rate Limit** para evitar sobrecarga de requisições
- **CORS** para controlar acessos externos
- **Validação de dados** com **Zod**

## 🌟 Apoie o projeto

Se você gostou, deixe uma estrela 🌟 no projeto!

---
**Desenvolvido por [Ivanildo Borges](https://www.linkedin.com/in/IvanildoBorges/)** 🚀

