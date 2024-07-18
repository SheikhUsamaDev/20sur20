# Stage 1: Build the React application
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using serve
FROM node:14

# install serve
RUN npm install -g serve

# Copy build files from build stage
COPY --from=build /app/build /app

EXPOSE 3000
CMD ["serve", "-s", "/app", "-l", "3000"]
