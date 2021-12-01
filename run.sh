#!/bin/sh
if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
	echo "Run usage: ${0} <optional URL>"
	echo "Example: ${0}"
	echo "Example: ${0} parrot.live"
	exit 0
fi

docker network create text-browser-network
docker build -t text-browser .
docker run --rm -it --network text-browser-network text-browser npm start $@
