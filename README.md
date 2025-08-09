# NestJS CI/CD PipeLine

<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

Nest framework TypeScript starter repository for building efficient and scalable server-side applications.

## Project Setup

```bash
  npm install
```

## Compile and Run the Project

```bash

# development
  npm run start

# watch mode
  npm run start:dev

# production mode
  npm run start:prod
```

## Run Tests

```bash

# unit tests
  npm run test

# e2e tests
  npm run test:e2e

# test coverage
  npm run test:cov
```

## Step-by-Step Guide to Set Up, Build, Test & Deploy

### 1. Clone the Repository

```bash

  git clone https://github.com/your-username/your-repo.git
  cd your-repo
```

### 2. Install Dependencies

 Use `npm install` for reproducible installs:

```bash
  npm install 
```

### 3. Build the Application

Compile your TypeScript code to JavaScript:

```bash
  npm run build
```

### 4. Build Docker Image Locally (Optional)

If you want to test Docker locally:

```bash
docker build -t your-dockerhub-username/nest-ci-pipeline-development:local .
```

### 5. Run Docker Container Locally (Optional)

Run the container locally to test:

```bash
 docker run -d -p 3000:3000 your-dockerhub-username/nest-ci-pipeline-development:local
```

Open `http://localhost:3000` to verify the app is running.

### 7. Configure GitHub Secrets

Go to your GitHub repo → Settings → Secrets and add:

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token
- `SERVER_IP`: Your Linux server IP or domain
- `SERVER_USER`: Your server username (e.g., root or ubuntu)
- `SERVER_SSH_KEY`: Your private SSH key (the key that has access to the server)

### 8. Push Code to `dev` or `main` Branch

When you push or merge code to the `dev` or `main` branches, GitHub Actions will:

- Run tests
- Build and push Docker images tagged `development` (for `dev`) or `production` (for `main`)
- SSH into your Linux server to:
    - Pull the latest image
    - Stop and remove the existing container
    - Run a new container with the latest image

### 9. Access Your Application

Your app will be accessible on your server's IP at port 3000, e.g.:

```
http://YOUR_SERVER_IP:3000
```

### 10. Managing Docker Container on Server

To manually check or control the container on your server:

```bash

docker ps                 # See running containers
docker logs nest-ci       # View logs
docker stop nest-ci       # Stop container
docker rm nest-ci         # Remove container
docker start nest-ci      # Start container
```

