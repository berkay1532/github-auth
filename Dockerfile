# Use the official Node.js runtime as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3030

# Set environment variables
ENV GITHUB_CLIENT_ID=Ov23li1JyJyNWvMjlBWT
ENV GITHUB_CLIENT_SECRET=c38eae951027b7f41d790c3be9800d1c12a766a0
ENV PORT=3030

# Start the application
CMD ["node", "server.js"] 