#!/bin/bash
if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
	echo "Usage: "$0""
	exit 0
fi

# Start webserver
cd webserver
./start-test-webserver.sh

# Wait for the webserver to be up
while ! curl -sf http://localhost:8080 > /dev/null; do sleep 0.1; done
cd -

# Set up network, build and run project
docker network create text-browser-network
docker build -t text-browser .
docker run --rm -it --network text-browser-network text-browser npm test

# Stop webserver
cd webserver
./stop-test-webserver.sh
