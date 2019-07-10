FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 8080

CMD npm install && npm start
