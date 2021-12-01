FROM node:16

# create app directory
WORKDIR /app

# copy package information
# https://stackoverflow.com/a/51536340/
COPY package*.json ./

COPY patches/*.patch ./patches
# copy source code
COPY . ./

# install packages
RUN npm install

# start app
CMD ["npm", "start"]
