From node:7.5-alpine

# Create App Directory
RUN mkdir -p /usr/node/app
WORKDIR /usr/node/app

# Copy Dependencies
COPY node_modules /usr/node/app/node_modules
COPY package.json /usr/node/app

# Copy the Source files
COPY src /usr/node/app/src

CMD ["npm", "start"]