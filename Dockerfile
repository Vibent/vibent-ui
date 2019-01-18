FROM nginx:alpine

COPY .deploy/nginx.dev.conf /etc/nginx/nginx.dev.conf
COPY .deploy/nginx.prod.conf /etc/nginx/nginx.prod.conf

WORKDIR /usr/share/nginx/html

COPY dist-dev ./dist-dev
COPY dist-prod ./dist-prod

# Default to dev configuration
ENTRYPOINT ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.dev.conf"]