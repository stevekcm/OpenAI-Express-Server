FROM node:latest
WORKDIR /opt/chatgpt-api
COPY package.json ./
RUN npm install
COPY dist/ .
EXPOSE 3000
CMD npm start
