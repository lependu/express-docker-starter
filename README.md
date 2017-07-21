Experimental project with dockerized expressjs server.

### Endpoints

## GET `/`

**Description:**
Returns the project name and version described in `package.json`.

**Example response:**
```JSON
{
  "name": "express-docker-starter",
  "version": "0.1.0"
}
```

### Errors

`404`
```JSON
{
  "status": 404,
  "message": "Page not found"
}
```

The project builds on the following official docker images:

- [node:6.11-alpine](https://github.com/nodejs/docker-node)
- [nginx:alpine](https://github.com/nginxinc/docker-nginx)

### Dependencies
- [docker](https://docker.com) v17.06
- [docker-compose](https://docs.docker.com/compose) v3.3

### Features
- [babel](https://babeljs.io)
- [Eslint](http://eslint.org/)
- [Tape](https://github.com/substack/tape)
- [nyc](https://github.com/istanbuljs/nyc)

### Build docker image
1. `$ cp .env.template .env`
Customize `.env` file. For `TIMEZONE` settings see the [alpine documentation](https://wiki.alpinelinux.org/wiki/Alpine_Linux:FAQ#Time_and_timezones)

2. Build the image:
`$ docker build -t [image-name] .`

3. Istall node dependencies:
`$ docker-compose run [--rm] install`


### Development
- development server
`$ docker-compose run [--rm] -p [hos-port]:3000 dev`
visit http://localhost:[host-port]
- shell `$ docker-compose run [--rm] sh`

### Tests
- lint `$ docker-compose run [--rm] lint`
- test `$ docker-compose run [--rm] test`
- coverage `$ docker-compose run [--rm] coverage`
- serve generated coverage
`$ docker-compose run [-d] [--rm] -p [host-port]:80 serve-coverage`
visit http://localhost:[host-port]

### Deploy

The deployment process depends on your server and needs.
[Here](https://egghead.io/lessons/node-js-setup-an-nginx-proxy-for-a-node-js-app-with-docker)
you can find a cool tutorial how to setup an `nginx` proxy for a `Node.js` app.

The `Deploy` file is a basic example how to build "productionish" image.
