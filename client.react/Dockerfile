FROM node:18-alpine AS build

WORKDIR /app

COPY . .
RUN npm install

RUN npm run build



FROM nginx:alpine

COPY --from=build /app/build /app
COPY nginx.conf /etc/nginx/conf.d/ui.conf

EXPOSE 8001
CMD ["nginx", "-g", "daemon off;"]

