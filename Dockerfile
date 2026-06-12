# Node.js 22 Alpine image use karo   base  image   1st step
FROM node:22-alpine

# Container ke andar working directory /app set karo 2nd step
WORKDIR /app

# package.json aur package-lock.json copy karo 3rd step
COPY package*.json ./

# Dependencies install karo    4th step
RUN npm install

# Project ki baki files copy karo 5th step
COPY . .

# Port expose karo 6th step
EXPOSE 5000

# Container start hote hi ye command chalegi 7th step
CMD ["npm", "start"] 