# MSA Frontend Example with Rest API and GraphQL

## Service Description

- This is a frontend service of MSA Web App

- It's built with Mobx and Apollo Client based on Next.js

- It shows how to handle both Rest API and GraphQL by Mobx to help you integrate with Legacy API and GraphQL

- Some photo and text are included in this project as samples and those things are property of Young Shin VSC co., Ltd

- So all meterials in static/\* will never allowed to be used for any purpose on the internet

## Scaffold

    - api
    - common
    - components
        - Footer
        - Header
        - Layout
    - config
    - pages
    - statics
        - assets
            - ci
            - images
    - next.config.js
    - package.json

## Usage

```js
## development
$ yarn dev

## build
$ yarn build

## production
$ yarn start

## dockerizing
$ docker build -t {Image Name} .
```

## Configuration

- Make sure prepare setting backend services up and running on any connectable network so that service is operating.

- Or you can insert configurations as your enviroment such as development, staging and production.

- Restful API, GraphQL and BaaS are dependencies of this service.

```js
## Place where you insert configurations parameters
common/*
config/*
```

## Connection

- You could see message like this when service run and connect with your local environment.

  <img style="-webkit-user-select: none;cursor: zoom-in;" src="https://user-images.githubusercontent.com/21056590/54066605-1c4ea100-4276-11e9-9670-21c46cf410ae.png" width="788" height="289">

- If you see this display, that means it works fine.

<img style="-webkit-user-select: none;cursor: zoom-in;" src="https://user-images.githubusercontent.com/21056590/54066608-22dd1880-4276-11e9-8912-63b82e8e8e63.png" width="788" height="805">

## LISENCE

MIT
