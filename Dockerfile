FROM node:16

# create app directory
WORKDIR /app

# copy package information
# https://stackoverflow.com/a/51536340/
COPY package*.json ./

# install packages
RUN npm install

# copy source code
COPY . ./

# start app
CMD ["npm", "start"]
