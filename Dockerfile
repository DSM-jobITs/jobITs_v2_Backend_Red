FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN npm install

COPY . /app

EXPOSE 3001
CMD ["npm", "start"]
