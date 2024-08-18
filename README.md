# Basic FastAPI + ReactJS

This is a basic example of a FastAPI backend with a ReactJS frontend.

You can test and deploy in seconds.

## How to run

```bash
docker-compose up --build -d
```

## Mode

**Modify the docker-compose**

### HTTP

| before | after |
| ------ | ----- |
| ```build: ./proxy/????``` | ```build: ./proxy/http``` |


### HTTPS

**Modify the docker-compose**
| before | after |
| ------ | ----- |
| ```build: ./proxy/????``` | ```build: ./proxy/https``` |


### Domain (not tested)

**Modify the docker-compose**
| before | after |
| ------ | ----- |
| ```build: ./proxy/????``` | ```build: ./proxy/domain``` |


## Schema

![Schema](./schema.png "Schema")









