## Requisitos

- Node > 12
- Docker + Docker Compose ( p/ api )
- Npm > 6

# Technical Challange Mercado Livre

Este projeto consiste em aplicação fullstack, desenvolvido utilizando tecnologias como NODE JS para backend e VUE JS para front END.

## Features

- Light/dark mode toggle
- Pagination
- Filters ( via categoria )
- Cross platform
- Responsive screen (mobile-friendly)
- Dockerized
- Vite Introduced ( superfast building )

## Tech Stack

**Client:** Vue, Vite, TailwindCSS, Axios

**Server:** Node, Express, NestJS Framework

## Variavel de ambiente

Para rodar este projeto no BACKEND, voce precisava renomear o arquivo .env.example para .env e adicionar a seguinte variavel.

`NJS_ML_API=https://api.mercadolibre.com`

## Documentação - API SWAGGER

Para ter acesso a documentação dos endpoints desenvolvido você deve acessar o seguinte link
[http://localhost:3000/api](http://localhost:3000/api)

## Executando localmente a API

Navegue ate o diretorio

```bash
  cd api
```

Executar com docker compose

```bash
  npm run docker:dev
```

Executar sem docker compose

```bash
  npm run start:dev
```

## Executando localmente o FRONT END

Navegue ate o diretorio

```bash
  cd api
```

Executar com o ambiente desenvolvimento

```bash
  npm run dev
```

Executar o compilamento em prod

```bash
  npm run build && npm run start
```

## Executando localmente a API

Navegue ate o diretorio

```bash
  cd api
```

Executar com docker compose

```bash
  npm run docker:dev
```

Executar sem docker compose

```bash
  npm run start:dev
```

## Executando localmente o FRONT END

Navegue ate o diretorio

```bash
  cd api
```

Executar com o ambiente desenvolvimento

```bash
  npm run dev
```

Executar o compilamento em prod

```bash
  npm run build &&npm run start
```
