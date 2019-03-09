# MSA Frontend Example using React SSR, Mobx and GraphQL

## Service Description

- This is a frontend service of MSA Web App

- It's built with Mobx and Apollo Client based on Next.js

- It shows how to handle both Rest API and GraphQL by Mobx to inhance you integrate with Legacy API and GraphQL Client

- Some photo and text are included in this project as samples

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

## production
$ yarn build && yarn prod

## dockerizing
$ docker build -t {Image Name} .
```

## Configuration

- Make sure backend services is built and running on any connectable network so that service is operating.

- Or you can insert configurations as your enviroment such as development, staging and production.

- Next.js, Mobx and Apollo Client are dependencies of this service.

```js
## Place where you insert configurations parameters
common/*
config/*
```

## Connection

- You could see message like this when service run and connect with your local environment.

## LISENCE

MIT
