FROM node:14.8.0-alpine as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm install
RUN npm install react-scripts -g

COPY . /usr/src/app
RUN npm run build

CMD ["npm", "run", "server"]
