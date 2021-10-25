#!/bin/sh
docker network create text-browser-network
docker build -t test-webserver .
docker run -dit --name test-webserver --network text-browser-network -p 8080:80 test-webserver
