# Dockerized Node.js CI/CD Pipeline

## Overview
This project demonstrates a Node.js application containerized using Docker and deployed using a CI/CD pipeline with GitHub Actions.

## Features
- REST API using Express.js
- Docker containerization
- CI/CD automation with GitHub Actions

## Tech Stack
- Node.js
- Express.js
- Docker
- GitHub Actions

## CI/CD Workflow
- Code push triggers GitHub Actions
- Docker image is built automatically
- Application is deployed

## Run Locally
npm install
node app.js

## Docker Run
docker build -t app .
docker run -p 3000:3000 app
