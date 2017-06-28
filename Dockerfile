FROM  nginx:1.13.1
RUN mkdir -p /var/www/invisible-alpha.com/html
RUN chmod -R 755 /var/www
COPY build/ /var/www/invisible-alpha.com/html

#COPY build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY invisible-alpha.conf /etc/nginx/conf.d/invisible-alpha.conf


RUN apt-get -qq update
RUN apt-get install -y wget
RUN wget https://dl.eff.org/certbot-auto
RUN chmod a+x certbot-auto
# RUN ./certbot-auto --nginx -n  --agree-tos --email njbannister15@gmail.com --domains invisible-alpha.com
