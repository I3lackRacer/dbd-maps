FROM node:20-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

expose 8080

COPY . .

CMD ["node", "index.js"]