#!/bin/bash

# Name of the image you want to remove
IMAGE_NAME=react-app-prod:latest

# Pull the latest changes from Git
git pull

# Stop and remove the existing containers
docker-compose down

# Remove local images for the services
docker-compose down --rmi local

# Remove the previous Docker image
docker rmi $IMAGE_NAME --force

# Build the Docker Compose services
docker-compose build

# Remove dangling images
docker image prune -f

# Run the Docker Compose services in detached mode
docker-compose up -d
