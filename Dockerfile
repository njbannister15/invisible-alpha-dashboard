FROM  nginx:1.13.1
COPY build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf