FROM node:14.16.0-alpine3.13

WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3001
CMD ["npm", "start"]