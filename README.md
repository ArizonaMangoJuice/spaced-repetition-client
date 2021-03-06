# Si Señor
## Isael and Cam's Spaced Repetition Project

### Live client!
https://protected-ridge-99600.herokuapp.com/

Create an account and start learning! It's that simple! Input an answer, hit submit!
If your guess is correct, you'll see a message saying so and your score tally increment!
If your guess is incorrect, you'll see a message saying so, and your score will remain unchanged!

or you can use this demo account!

- username: Demo
- password: password123

## Features
- Learn 10 Spanish words!
- App will help you learn the words you don't know

## Code style
Standard/Thinkful-style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### Front-end Tech:
- jwt-decode
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-form
- redux-thunk
- nodemon
- passport
- passport-jwt
- passport-local

## Screenshots
![alt text](https://gdurl.com/uVvJ)
![alt text](https://gdurl.com/HUegP)
![alt text](https://gdurl.com/5tlQ)

### Live server!
https://spaced-repetition-server-ic.herokuapp.com 

## The Algorithm: Spaced Repetition
Given a list of questions with corresponding "memory values", M, starting at 1:
Take the first question in the list
Ask the question
If the answer was correct:
  Double the value of M
If the answer was wrong:
  Reset M to 1
Move the question back M places in the list

### Endpoints
- /api/login (for user creation)
- /api/users (to see all the users)

