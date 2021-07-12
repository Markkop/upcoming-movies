# 🎥 Upcoming Movies

[![https://img.shields.io/badge/made%20with-react-blue](https://img.shields.io/badge/made%20with-react-blue)](https://reactjs.org/)
[![https://img.shields.io/badge/made%20with-express-blue](https://img.shields.io/badge/made%20with-express-blue)](https://expressjs.com/)
[![https://img.shields.io/badge/made%20with-typescript-blue](https://img.shields.io/badge/made%20with-typescript-blue)](https://www.typescriptlang.org/)

This project is a fullstack coding challenge which consumes [TheMovieDatabase API](https://developers.themoviedb.org/) to display upcoming movies and searched movies. 

Demo: soon

## Requisites

soon

## Features

- MaterialUI for faster prototyping
- Yarn workspaces for monorepo management
- Atomic Design for components structure
- Continuous Deploy with Github Actions to Heroku
- Type safe with Typescript

## How to Develop

- Clone this repository
- Run `yarn`
- Run `yarn dev` or `yarn dev:client`/`yarn dev:server`
- Access http://localhost:3000 for client or hit http://localhost:8080 for server

## How to Deploy

- The application is deployed directly into Heroku using Github Actions

## Challenges/Wishlist

### React State Management

At first I thought that `useState` hooks would be enought to manage states for this simple application, however I've considered using Redux when developping the Movie Details Modal and even the Query/setQuery states. However it would looked being too much and I went for a Context API and Props Drilling approach, respectively.  
I'd like to have this [Mark Erikson video](https://www.youtube.com/watch?v=9zySeP5vH9c) about Redux and his draft [React cheatsheet](https://react-community-tools-practices-cheatsheet.netlify.app/state-management/overview) about State Managment for future references. Really cool material.

### Layout Design

UI and UX are not my strong points, so I've used MaterialUI to help me for a faster development. It surelly worked, but sometimes I've wished using my own components for a better understanding on how tags and styles were working

### Shared package 

There were times where I wanted to use the same types I've declared on both client and server applications and it sound tempting creating a new package just for this. In the end, I've just imported it directly from the other package.

### Useful links:

* [Using Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
* [Creating react-app from scratch](https://andrey-arthur.medium.com/how-to-create-your-react-app-from-scratch-without-create-react-app-or-babel-webpack-setup-a0e429a3527a)
* [Pitfalls of overusing React Context](https://blog.logrocket.com/pitfalls-of-overusing-react-context/)