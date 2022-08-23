FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN yarn install
CMD ["yarn", "start"]