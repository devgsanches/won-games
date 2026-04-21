# Won Games

E-commerce de jogos digitais, **WON GAMES**, arquitetura/tecnologias modernas e boas práticas.

![Won Games](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Strapi](https://img.shields.io/badge/Strapi-5.33-blue?style=flat-square&logo=strapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-000?style=flat-square&logo=graphql)
![Stripe](https://img.shields.io/badge/Stripe-Payments-6772E5?style=flat-square&logo=stripe)

---

## 📋 Índice

- [Visão geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Stack tecnológica](#-stack-tecnológica)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Variáveis de ambiente](#-variáveis-de-ambiente)

---

## 🎯 Visão geral

O **Won Games** é uma loja digital de jogos que combina um **frontend** em Next.js com um **CMS/Backend** em Strapi, integração com **Stripe** para pagamentos, **GraphQL** para API e **PostgreSQL** como banco de dados. O projeto inclui autenticação, carrinho, wishlist, checkout, perfil de usuário e painel administrativo completo para gerenciamento de conteúdo.

---

## ✨ Funcionalidades

| Área | Recursos |
|------|----------|
| **Loja** | Catálogo de jogos, busca, filtros por categoria/plataforma/preço, detalhes de produto |
| **Carrinho** | Adicionar/remover itens, dropdown no header, página de checkout |
| **Wishlist** | Lista de desejos persistente |
| **Autenticação** | Login, cadastro, perfil, alteração de senha |
| **Perfil** | Dados pessoais, pedidos, cartões salvos |
| **Pagamentos** | Checkout Stripe com suporte a imagens dos jogos no recibo |
| **Admin (CMS)** | Gestão de jogos, categorias, banners, desenvolvedores, publishers, plataformas, home dinâmica |

---

## 🛠 Stack

### Frontend (`won-frontend`)

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19, Material UI (MUI) 7, Radix UI, shadcn/ui, Tailwind CSS 4 |
| **Estado** | Zustand |
| **Dados** | Apollo Client, GraphQL, GraphQL Codegen |
| **Formulários** | React Hook Form, Zod, @hookform/resolvers |
| **Animações** | GSAP, Motion, Lottie, Embla Carousel, Swiper |
| **Utilitários** | dayjs, clsx, tailwind-merge, class-variance-authority, uuid |
| **Testes** | Vitest, Testing Library, Playwright (browser) |
| **Qualidade** | ESLint, Prettier, Husky, lint-staged |
| **Documentação** | Storybook |
| **Codegen** | Plop (geradores de componentes) |

### Backend / CMS (`cms`)

| Categoria | Tecnologias |
|-----------|-------------|
| **CMS** | Strapi 5 |
| **API** | GraphQL (@strapi/plugin-graphql) |
| **Banco** | PostgreSQL (via `pg`), SQLite (dev) |
| **Pagamentos** | Stripe |
| **Admin UI** | React, React Router, styled-components |
| **Utilitários** | axios, slugify, ngrok |
| **Build** | TypeScript 5 |

### Infraestrutura & DevOps

| Ferramenta | Uso |
|------------|-----|
| **pnpm** | Gerenciador de pacotes (monorepo) |
| **Husky** | Git hooks |
| **GraphQL Codegen** | Tipagem TypeScript a partir do schema GraphQL |

---

## 📁 Estrutura do projeto

```
won-games/
├── won-frontend/          # Aplicação Next.js (loja)
│   ├── app/               # App Router, páginas e layouts
│   │   ├── (app)/         # Layout principal da loja
│   │   │   ├── (default)/ # Home, games, cart, wishlist, profile
│   │   │   ├── (game-layout)/ # Detalhes do jogo
│   │   │   └── _components/   # Componentes compartilhados
│   │   ├── auth/          # Login, cadastro
│   │   └── graphql/       # Queries, mutations, fragments, generated
│   ├── components/        # Componentes UI (shadcn) e customizados
│   ├── lib/               # Utilitários, Apollo Client
│   ├── generators/        # Plop (templates de componente)
│   └── scripts/           # fetch-schema, convertToNonNull
├── cms/                   # Strapi (admin + API)
│   ├── config/            # database, admin, middlewares
│   └── src/api/           # Content Types: game, category, banner, home, etc.
├── package.json           # Root (husky, pnpm overrides)
└── README.md
```

### Content Types do CMS (Strapi)

| Tipo | Descrição |
|------|-----------|
| **Game** | Jogos (título, preço, capa, galeria, descrição, rating, categorias, desenvolvedores, plataformas) |
| **Category** | Categorias de jogos |
| **Banner** | Banners da home com ribbon |
| **Home** | Seções dinâmicas (novos, populares, em breve, grátis) |
| **Developer** | Desenvolvedores |
| **Publisher** | Publishers |
| **Platform** | Plataformas (Windows, Linux, Mac, etc.) |
| **Stripe** | Configuração do Stripe |

---

## 🚀 Como executar

### Pré-requisitos

- Node.js 20+
- pnpm
- PostgreSQL (opcional; o Strapi usa SQLite por padrão em dev)

### Instalação

```bash
# Clonar e instalar dependências
git clone <repo-url>
cd won-games
pnpm install
```

### Variáveis de ambiente

**CMS (`cms/.env`):**

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="sua-chave"
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
JWT_SECRET=...
STRIPE_SECRET_KEY=sk_test_xxx
STRAPI_URL=http://localhost:1337
```

**Frontend:** Configure a URL do GraphQL em `won-frontend/app/(app)/_lib/apollo-client.ts` (padrão: `http://localhost:1337/graphql`).

### Executar em desenvolvimento

```bash
# Terminal 1: Strapi (CMS + API)
cd cms && pnpm dev

# Terminal 2: Next.js (loja)
cd won-frontend && pnpm dev
```

- **Loja:** http://localhost:3000  
- **Admin Strapi:** http://localhost:1337/admin  

### Build para produção

```bash
cd cms && pnpm build && pnpm start
cd won-frontend && pnpm build && pnpm start
```

---

## 🔐 Variáveis de ambiente

### CMS (`cms/.env`)

| Variável | Descrição |
|----------|-----------|
| `STRIPE_SECRET_KEY` | Chave secreta do Stripe |
| `STRAPI_URL` | URL pública do CMS (ex: `https://cms.suaempresa.com`). Em dev com imagens no checkout: use ngrok (`ngrok http 1337`) e coloque a URL HTTPS aqui. |
| `DATABASE_*` | Para PostgreSQL em produção |

### Frontend

A URI do GraphQL é configurada no Apollo Client (`uri: "http://localhost:1337/graphql"`). Em produção, apontar para a URL do CMS.

---

## 📚 Scripts úteis

### Frontend

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm test:watch` | Testes em modo watch |
| `pnpm test:coverage` | Cobertura de testes |
| `pnpm storybook` | Storybook |
| `pnpm types:generate` | Gerar tipos GraphQL |
| `pnpm generate` | Plop (criar componentes) |

### CMS

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Strapi em modo develop |
| `pnpm build` | Build do admin |
| `pnpm start` | Strapi em modo produção |

---

## 🧪 Qualidade de código

- **ESLint** + **Prettier** para padronização
- **Vitest** + **Testing Library** para testes unitários
- **Storybook** para documentação de componentes
- **Husky** + **lint-staged** para execução automática de lint/testes em commits
