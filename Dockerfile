FROM node:14-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN npm install
RUN npm i -D typescript
RUN npm i -D ts-node

EXPOSE 3001
CMD ["npm", "start"]
