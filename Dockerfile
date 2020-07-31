FROM node:10.22

# Create app directory
WORKDIR /apps

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./assets ./assets
COPY ./dist ./dist
COPY ./app.js .


EXPOSE 3000
CMD [ "npm", "start" ]