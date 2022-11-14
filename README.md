# RESTFull Api for not to do list

This api is create from react not to do frontend application, here is the repo for the frontend `...`

## How to run

1. open your terminal at your development folder
2. Run `git clone ....`
3. Run `cd ....`
4. Run `npm install`
5. Run `npm start`

Now, you your server is runn at `http://localhost:8000`

## API details

This server applies the REST full principle to provide API.
All the api will follow `<rooturl>/v1/<resources end point>`

## Task API

All the task related transaction of api will be request through `<rooturl/v1/talk>`
| # | PATH | METHOD | IS PRIVATE | DESCRIPTION |
|---|------|--------|------------|-------------------------------------------------------------|
|1. |`/` |GET | NO | This end point will return all the task from DB |
|2. |`/` |POST | NO | Receives an oject from the client and stores in the database|
|3. |`/` |PUT | NO | Receives `_id` oject from the client and stores in the database|
|4. |`/` |DELETE | NO | Receives an oject from the client and stores in the database|
