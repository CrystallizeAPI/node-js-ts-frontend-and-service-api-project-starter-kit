# BEFORE TO USE, DO THIS RIGHT AFTER YOU CLONE

- the Frontend folder is empty, you decide the framework you want for your Frontend, on our side we like them all, with a preference for Remix Run those days.

- Replace `service-api.domain.name` and `frontend.domain.name` by the domains you want for your local development
    - in this file (README.md)
    - in the `provisioning/dev/Caddyfile`
    - in the `Makefile`
    - add the domains in your `/etc/hosts` (as mentioned in the provided documentation below)

That's it:! Then you can run
```bash
make install
make serve
```

- Remove this section from this file (README.md)


# Project [NAME]

This repository handles:

-   the Frontend using [FRONTEND FRAMEWORK]
-   the Service API using Koa

# Requirements

-   Docker
-   Volta.sh (that will bring good version of Node)
-   Caddy Server v2
-   `mkcert` for https with local domains

> You need this install on your computer to leverage the Makefile automation

## Domains

We want to respect as much a possible the Twelve-Factor App, especially https://12factor.net/dev-prod-parity

It means we want HTTPS locally and custom domains locally as well.

Add an entry in your `/etc/hosts`

```
127.0.0.1 service-api.domain.name frontend.domain.name
```

> All the automation are prepared to work with service-api.domain.name and frontend.domain.name

# Installation

```bash
make install
```

This will:

-   install the Certificate Authority using `mkcert`
-   generate the certificates for the domains
-   `npm install` the `front-end` folder and `service-api` folder

# Run the project

```bash
make serve
```

This will:

-   run the `front-end` and `service-api` projects on HTTP
-   run the Caddy proxy on HTTPS
-   run the Docker Network

> you can stop non stopped services with `make stop`

-   Frontend: https://frontend.domain.name
-   Service API: https://service-api.domain.name
-   Mailcatcher: http://localhost:42180

# Gotchas

-   Frontend run in HTTP on 42080
-   Service API run in HTTP on 42081
-   Caddy enables HTTPS on top of them all
-   Mailcatcher is on the side up via Docker
