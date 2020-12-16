FROM node:14-slim

COPY package*.json ./

RUN npm install
COPY ./ .

RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]