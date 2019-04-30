# build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
# - this line was throwing errors, something is up with Jenkins Docker plugin -
# FROM nginx:stable-alpine as production-stage
FROM nginx:stable-alpine
COPY --from=build-stage /app/docs /usr/share/nginx/html
EXPOSE 80:1337
CMD ["nginx", "-g", "daemon off;"]
