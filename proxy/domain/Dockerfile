FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# Copy the SSL certificate and key files into the container
# COPY path/to/your/certificate.crt /etc/nginx/ssl/certificate.crt
# COPY path/to/your/private.key /etc/nginx/ssl/private.key

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
    -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=yourdomain.local"

# Expose ports 80 and 443
EXPOSE 80 443


# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]








