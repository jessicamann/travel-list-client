FROM node:7
MAINTAINER jmann

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install
RUN npm build

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start"]
