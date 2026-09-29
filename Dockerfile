FROM nginx:1.27-alpine

COPY . /usr/share/nginx/html/
COPY deploy/container-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
