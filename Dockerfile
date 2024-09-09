# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple server to serve the built files
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the server to serve the built files
CMD ["serve", "-s", "build"]

