# Formail Frontend
#
# VERSION               0.0.1

# Stage 0: Build Angular App
FROM node as node

COPY package.json /app/
COPY package-lock.json /app/
COPY .angular-cli.json /app/
COPY tsconfig.json /app/
COPY src /app/src

WORKDIR /app

RUN npm install
RUN npm run build -- --prod

# Stage 1: Nginx that serves the compiled Angular app
FROM nginx

COPY --from=node /app/dist /app
COPY custom.nginx /etc/nginx/conf.d/default.conf