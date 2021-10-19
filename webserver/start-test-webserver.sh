#!/bin/sh
docker build -t test-webserver .
docker run -dit --name test-webserver -p 8080:80 test-webserver
