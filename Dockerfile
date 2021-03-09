FROM node:14-slim

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install

EXPOSE 3001
CMD ["npm", "start"]
