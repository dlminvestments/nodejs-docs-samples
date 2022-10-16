# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
snyk-fix-e6bdaf5a95f99e5396a217da6bb4bcc5
FROM node:16-bullseye-slim
=======
snyk-fix-7bb1b3b6a098e39e8ec90b4e456685f9
FROM node:16.11.0-bullseye-slim
=======
FROM node:17.9-slim
master
master

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]
