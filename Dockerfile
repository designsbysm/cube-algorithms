FROM node:14.17.6-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install --silent
RUN npx browserslist@latest --update-db
RUN npm run build

CMD ["npm", "run", "serve"]