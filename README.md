# University of Pittsburgh 2021 Fall INFSCI 2710 Database Management System Group Project - TransMeet Server End

## Description

Node.js, Express, Sequelize, Typescript based program, supporting user registration and login, online shopping and dynamic searching...

## How To Start

1. npm install

You might need to install express and typescript if error occurs.

npm install typescript express -g

// enter db directory
2. cd db

// migrate database schema using sequelize
3. npx sequelize-cli db:migrate

// initialize some data
4. npx sequelize-cli db:seed:all

// you can insert some other data by modifying codes in /db/seeders
5. (optional) npx sequelize-cli seed:generate --name demo-access

// run program, now it is listening port 3000
6. npm run start
