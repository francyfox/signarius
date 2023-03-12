FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000