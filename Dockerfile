FROM node:19.3-alpine3.16 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm i @prisma/client

RUN npm run build

FROM node:19.3-alpine3.16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .
RUN npm i @prisma/client

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/src/main"]