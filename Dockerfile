FROM node:10-slim

MAINTAINER Kevin You

# Create Directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install Denpendencies
COPY package*.json ./
RUN npm install
RUN npm install -g yarn

# Build App
COPY . .
RUN yarn build
EXPOSE 80 80
ENV NODE_ENV production

CMD ["yarn", "start"]