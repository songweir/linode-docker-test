FROM node:lts-alpine AS frontend

WORKDIR /app

COPY package*.json ./

RUN pnpm i

COPY . .

ENV PROT=8080

CMD ["node", "."]