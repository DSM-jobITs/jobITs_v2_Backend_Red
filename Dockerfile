FROM node:14-slim

COPY package*.json ./

RUN npm install
COPY ./ .

RUN npm i ts-node
RUN npm i typescript

EXPOSE 3001
CMD ["npm", "start"]
