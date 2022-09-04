# Yago Technical Challenge

This project is done with the [NestJS](https://github.com/nestjs/nest) framework

It is hosted and can be accessed [here](https://yago-tech-challenge.herokuapp.com/)

## Architecture

Both the backend and the frontend are in the same project.

### Backend

The backend is separated is several modules, each responsible for handling different part :
- `simulations` : create a simulation
- `quotes` : fetch quotes from the api
- `leads` : hold the user leads schema and dtos
- `advices` : create advices according to user input

Mongo is used as database management program. When a `simulation` is computed, all the data (lead, quote...) is stored in the `simulation` collection.

###Frontend

For the sake of simplicity, NestJS is used to display very basic html pages. 
Everything needed in the `front` module.