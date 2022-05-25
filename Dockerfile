FROM node:16.15.0-alpine

RUN npm install -g serve
RUN npm install -g expo-cli

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build:web

CMD serve --single web-build 
