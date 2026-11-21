FROM node:26-alpine

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN npm install -g http-server
RUN npm install -g expo-cli
RUN npm install -g corepack && corepack enable

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build:web

CMD http-server web-build
