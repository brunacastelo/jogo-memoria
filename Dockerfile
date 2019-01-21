FROM node:alpine
RUN mkdir -p /usr/src/react-app
WORKDIR /usr/src/react-app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
