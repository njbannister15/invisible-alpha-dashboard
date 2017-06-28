#!/bin/bash
npm run build
rm -rf deploy deploy.tar deploy.tar.gz
mkdir deploy
cp -r build deploy
cp invisible-alpha.conf deploy
cp deploy.sh deploy
tar -cvf deploy.tar deploy
gzip deploy.tar
scp -i ~/Desktop/development-key-pair.pem  deploy.tar.gz ubuntu@ec2-34-229-183-11.compute-1.amazonaws.com:~
