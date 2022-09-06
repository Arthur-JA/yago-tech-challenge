# Yago Technical Challenge

This project is done with the [NestJS](https://github.com/nestjs/nest) framework and is written in TypeScript.

It is hosted on Heroku and can be accessed [here](https://yago-tech-challenge.herokuapp.com/)
> ⚠️ The server goes in idle state if not used for a certain amount of time. It might take 1 minute to start it when opening the web page.

## Architecture

Both the backend and the frontend are in the same project and use NestJS.

### Backend

The backend is separated is several modules, each responsible for handling different part :
- `simulations` : create a simulation and orchestrate other modules
- `quotes` : fetch quotes from the api
- `leads` : create user leads
- `advices` : create advices according to user input

MongoDB is used as database management program. When a `simulation` is computed, all the data (lead, quote...) is stored in the `simulation` collection.

Validation is done via decorators with the `class-validator` package.

### Frontend

For the sake of simplicity, NestJS is used to display very basic html pages. 
Everything needed in the `front` module, and it is using then `Handlebars` templating engine.


### App behavior

In order:
- User fills form
- Form validation
- Create lead
- Fetch quote
- Create advices
- Create simulation
- Save simulation in DB
- Redirect to show simulation page