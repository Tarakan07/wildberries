FROM node:19-alpine as dependencies
WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci

FROM node:19-alpine as builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build

FROM node:19-alpine as runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
