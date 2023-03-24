FROM node:18-alpine AS base
RUN npm i -g pnpm

#FROM base AS dependencies
WORKDIR /app
COPY . .
RUN pnpm i

EXPOSE 3000