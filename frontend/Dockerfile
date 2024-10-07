# Build
FROM node:22 AS build

WORKDIR /app

COPY ./app .

# Install dependencies
RUN npm install

FROM nginx:alpine

COPY ./app/dist /usr/share/nginx/html


# Copy the build output to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Run nginx
CMD ["nginx", "-g", "daemon off;"]




