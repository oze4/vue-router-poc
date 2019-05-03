# build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm config set unsafe-perm true
RUN npm install
RUN npm install -g @vue/cli
COPY . .
RUN npm run build

# production stage
# - this line was throwing errors, something is up with Jenkins Docker plugin -
# FROM nginx:stable-alpine as production-stage
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/docs /usr/share/nginx/html
EXPOSE 443
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
