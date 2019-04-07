FROM node:10

EXPOSE 3000 5000

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app

RUN ./install.sh

CMD ./execute.sh
