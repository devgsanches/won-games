FROM node:20-alpine

# Diretório da app
WORKDIR /opt/app

# Habilita pnpm via corepack
RUN corepack enable

# Copia apenas manifests primeiro (cache)
COPY package.json pnpm-lock.yaml ./

# Instala dependências
RUN pnpm install

# Copia o resto do projeto
COPY . .

# Build do Strapi
RUN pnpm build

# Porta do Strapi
EXPOSE 1337

# Start em modo desenvolvimento
CMD ["pnpm", "develop"]