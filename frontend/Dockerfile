# Build
FROM node:18 AS build

WORKDIR /app

COPY ./app .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Production
FROM nginx:alpine

# COPY ./app/dist /usr/share/nginx/html


# Copy the build output to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose 80 port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]




