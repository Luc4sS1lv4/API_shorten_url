# API de Encurtamento de URLs

Uma API desenvolvida em **TypeScript** com **Fastify** para encurtamento de URLs.  
Suporta autenticação com **JWT**, senhas seguras com **bcrypt** e armazenamento **em memória**.  
Os links expiram após **1 hora** e possuem contagem de cliques.

---

## Funcionalidades

- Cadastro e login de usuários (armazenados em memória).  
- Senhas protegidas com **bcrypt**.  
- Autenticação via **JSON Web Token (JWT)**.  
- Geração de links curtos com **NanoID**.  
- Links expiram em **1 hora**.  
- Contagem de cliques em cada link.  
- Implementação baseada em princípios **SOLID**  
  - **SRP (Single Responsibility Principle)**  
  - **DIP (Dependency Inversion Principle)**  

---

## Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-20232A?style=for-the-badge)
![Bcrypt](https://img.shields.io/badge/Bcrypt-FF9900?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge)
![NanoID](https://img.shields.io/badge/NanoID-06B6D4?style=for-the-badge)


- **TypeScript** – linguagem principal  
- **TS Node** – execução do TypeScript  
- **Fastify** – framework web rápido e leve  
- **bcrypt** – hash seguro de senhas  
- **JSON Web Token (JWT)** – autenticação segura  
- **NanoID** – geração de IDs curtos e únicos  

---

## Fluxo de Funcionamento

1. **Cadastro do Usuário**  
   - Usuário é criado e armazenado **em memória**.  
   - Senha é **hasheada** com bcrypt.  

2. **Login**  
   - Usuário informa login e senha.  
   - Se válido, é gerado um **JWT**.  
   - Token deve ser enviado no **header** da requisição (`Authorization`).  

3. **Autenticação**  
   - Middleware valida se o token é válido e não expirou.  
   - Se expirado, o usuário deve fazer login novamente.  

4. **Geração de Links**  
   - Usuário autenticado pode gerar links curtos com **NanoID**.  
   - Cada link expira em **1 hora**.  
   - Cada clique é contabilizado.  

---

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
