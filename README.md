# Formail

Form to mail service which allows e.g. static websites to send form data via mail. The backend is written in Node.js,
while the frontend uses Angular.

## Deployment

To deploy the application you need to have `docker` and `docker-compose` installed. After installing deploy via:

`docker-compose up -d`

This will deploy a new instance of MongoDB as well as one container for the backend and one for the frontend. The backend
container is just a Node.js application, while the frontend container serves the compiled frontend with Nginx.

## Development

To be able to run this project you will need an instance of MongoDB, as well as `npm`, `node` and `ng`. Both subprojects have dependencies that can be 
installed when in the respective directory via:

`npm install`

Run backend:

1. `cd backend`
2. `node backend/src/app.js`

Run frontend:

1. `cd frontend`
2. `ng serve`

After starting both, the website will be available at `localhost:4200`.
