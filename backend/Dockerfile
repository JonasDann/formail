# Formail Backend
#
# VERSION               0.0.1

FROM node

COPY package.json /app/
COPY package-lock.json /app/
COPY src /app/src

WORKDIR /app

RUN npm install

CMD node src/app.js