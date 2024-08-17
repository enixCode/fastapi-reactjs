# Use the official Nginx image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

RUN apk add openssl

# Generate a self-signed certificate

RUN mkdir -p /etc/nginx/ssl

RUN touch /etc/nginx/ssl/selfsigned.key

RUN touch /etc/nginx/ssl/selfsigned.crt

RUN apk add --no-cache openssl

RUN mkdir -p /etc/nginx/ssl && \
    openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/selfsigned.key \
    -out /etc/nginx/ssl/selfsigned.crt \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=example.com"

# Expose ports 80 and 443
EXPOSE 80 443

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]



