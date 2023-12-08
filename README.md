# Desafio Aplicação Nest.js com Docker

> Desafio 2 Imersão Full Stack && Full Cycle 16

## Informações do desafio

Neste desafio, você deve criar uma aplicação Nest.js com Docker que rode na porta 3000.

Esta aplicação precisa expor 2 rotas de API Rest:

- Listar assets - POST /api/assets

- Criar assets - GET /api/assets

- Criar orders - POST /api/orders

- Listar orders - GET /api/orders

### Um asset tem os seguintes dados:

- id (é informado pelo usuário)
- symbol (símbolo do ativo)

### Uma order tem os seguintes dados:

- id automático do banco
- asset_id (relacionado com Asset)
- price
- status (open, pending, closed) (não pode deixar mandar o status no POST)

### Observações

O ORM a ser usado é o Prisma ORM e o banco de dados precisa ser o Mongo, image: bitnami/mongodb:5.0.17

Crie o arquivo api.http para fazer as chamadas HTTP. Ao rodar o docker compose up já precisa subir logo de cara o projeto com o Nest.js rodando + o MongoDB.

## Tecnologias

- Typescript / Javascript
- Node Js
- Nest Js
- Prisma ORM
- Mongo DB
- Rest API
- Docker

## Nest and Prisma

- create new nest project: npx @nestjs/cli new fsfc16-desafio2

- install prisma: npm install @prisma/client
- init prisma: npx prisma init

- generate prisma client: npx prisma generate

- create nest module: npx nest generate module prisma
- create nest service: npx nest generate service prisma/prisma

- create nest module: npx nest generate module assets
- create nest service: npx nest generate service assets/assets
- create nest controller: npx nest generate controller assets/assets

- create nest module: npx nest generate module orders

## Rodar

### Requisitos

- docker and docker compose instalados
- clonar este repositório

### Executar

- terminal na raiz do projeto: docker compose up -d
