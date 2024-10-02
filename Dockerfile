# Use the official Node.js version 20.15.1
FROM node:20.15.1
 
# Set the working folder inside the container
WORKDIR /app
 
# Copy only package files first to install dependencies
COPY package*.json ./
 
# Install only the needed dependencies for production
RUN npm install
 
# Copy the rest of the app's code
COPY . .
 
# Open port 3040 for the app
EXPOSE 3080
 
# Command to run the app
CMD ["node", "server.js"]