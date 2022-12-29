
FROM node:19.3-alpine3.16 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm i @prisma/client

RUN npm run build