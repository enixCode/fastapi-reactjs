<div style="display: flex; justify-content: center">
  <img src="./logo.jpg" width=25% />
</div>

# Template (FastAPI + ReactJS) => Docker Compose

This is a template of a FastAPI backend with a ReactJS frontend.

Now **hot reload** is available for the frontend. 🎉

You can test and deploy in seconds.

## Summary

- [Basic (FastAPI + ReactJS) => Docker Compose](#basic-fastapi--reactjs--docker-compose)
  - [Summary](#summary)
  - [Mode](#mode)
  - [How to run](#how-to-run)
    - [Prod mode](#prod-mode)
    - [Dev mode](#dev-mode)
      - [Frontend Dockerfile](#frontend-dockerfile)
      - [Docker Compose](#docker-compose)
      - [URL Access](#url-access)
  - [Schema](#schema)

## Mode

- "**Prod**": The frontend is built and served by Nginx.
- **Dev**: The frontend is served by the Node server with hot reload.

## How to run

### Prod mode

```bash
docker-compose up --build -d
```

### Dev mode

**Some steps to run with :**
- frontend:8080 (hot reload)
- backend:8000

#### Frontend Dockerfile

*./frontend/Dockerfile*

```Dockerfile
# Build
FROM node:22 AS build

WORKDIR /app

COPY ./app .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

ENTRYPOINT ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "80"]
```

#### Docker Compose

**uncomment the following line**

*frontend*
```yml
ports:
  - "8080:80"
```

*backend*
```yml
ports:
  - "8000:8000"
```

```bash
docker compose up --build --watch
```

#### URL Access

- Frontend: http://localhost:8080
- Backend: http://localhost:8000/docs

## Schema

![Schema](./schema.png "Schema")









