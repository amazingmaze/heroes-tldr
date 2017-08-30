FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app/package.json

RUN npm install

COPY . /src/app

EXPOSE 8080

CMD ["npm", "run dev"]

CMD ["npm", "start"]
