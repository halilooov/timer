FROM node:18
WORKDIR /app

RUN npm install -g bun

COPY package.json .
RUN bun install

COPY . .
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]