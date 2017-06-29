mkdir -p /var/www/invisible-alpha.com/html
chmod -R 755 /var/www
sudo rm -rf /var/www/invisible-alpha.com/html/*
sudo cp -r build/* /var/www/invisible-alpha.com/html/.
sudo cp invisible-alpha.conf  /etc/nginx/sites-enabled/invisible-alpha
sudo service nginx restart