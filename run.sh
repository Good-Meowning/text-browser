#!/bin/sh
docker network create text-browser-network
docker build -t text-browser . 
docker run --rm -it --network text-browser-network text-browser npm start $1 $2
