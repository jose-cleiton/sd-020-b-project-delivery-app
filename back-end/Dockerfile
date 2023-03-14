FROM node:16.14-alpine

WORKDIR /app-backend

COPY package*.json ./


RUN npm install && npm install mysql2 

COPY . .

RUN npx tsc

CMD ["npm", "start"]
