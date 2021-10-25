#!/bin/sh
if [ $# -lt 1 ] || [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
	echo "Run usage: "$0" <URL> <isLocal>"
	echo "Example: "$0" parrot.live"
	exit 0
fi

docker network create text-browser-network
docker build -t text-browser .
docker run --rm -it --network text-browser-network text-browser npm start $@
