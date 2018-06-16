---
title: "Quick Reference for basic Docker Commands"
cover: "https://unsplash.it/1152/300/?tech?image=0"
category: "Build Tools"
date: "01/05/2018"
tags:
    - Build tools
---

<b>Check Docker version</b>

```
docker version
```

<b>Container commands</b>

```
docker container run nginx
docker container run --publish 3000:80 nginx
docker container run —publish 3000:80 —detach —name <container-name> nginx
```

<b>Start, stop, remove and log</b>
```
docker start nginx
docker stop nginx
docker rm nginx
docker rm -f nginx
docker container logs nginx
```

<b>Start a container interactively</b>
```
docker container run -it nginx bash
```

<b>Start an exisiting container</b>
```
docker container start ai nginx
```

<b> To run commands inside running container
```
docker container exec -it
```

<b>Get ip address of a container</b>
```
docker container inspect --format  '{{ .NetworkSettings.IPAddress}}' server
```

<b>Network</b>
```
docker network ls
```

<b>Create new network</b>
```
docker network create my_app_net
docket network inpect my_app_net
```

<b>Connect and disconnect from network</b>
```
docker network connect my_app_net container_name
docker network disconnect my_app_net container_name
```

<b>Dockerfile</b>
```
docker image build -t imageName .
```

<b>Docker Compose</b>
```
Docker-compose
docker-compose up
docker-compose down
```

<b>Stop / remove all Docker containers</b>
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```