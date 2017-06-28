#!/bin/bash


mkdir deploy
cp -r build deploy
cp invisible-alpha.conf deploy
cp deploy.sh deploy
tar -cvf deploy.tar deploy
gzip deploy.tar
