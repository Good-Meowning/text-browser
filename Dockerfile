FROM node:16

# create app directory
WORKDIR /app

# copy source code
COPY . ./

# install packages
RUN npm install

# start app
CMD ["npm", "start"]
