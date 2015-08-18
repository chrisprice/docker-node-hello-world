# docker-node-hello-world
A hello world example of building a docker image from a node app

## Building

```
docker build -t docker-node-hello-world .
```

## Running

```
docker run -it --rm docker-node-hello-world
```

## Clean (everything!)

```
docker rm -f `docker ps -qa`
docker rmi -f `docker images -qa`
```
