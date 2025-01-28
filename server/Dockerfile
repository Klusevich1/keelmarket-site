FROM node:18

WORKDIR /app

COPY . .
RUN npm install && chmod -R 775 /app/node_modules/.bin

EXPOSE 3000
CMD ["npm", "run", "start"]
