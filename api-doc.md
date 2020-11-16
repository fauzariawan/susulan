# hacktiv-jokes-server

​
List of available endpoints:
​
- `POST /signUp`
- `POST /signIn`
- `GET /jokes/random`
- `POST /jokes`
- `POST /favourites`
- `GET /favourites`

### POST /signUp

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "username": "string",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaXNzYSIsImlhdCI6MTU4OTc3NjA0NX0.W4tTBiKkglA2kBoCv-8pJIx6Utn86-PwdUPJFXZTJHY"
}
```

### POST /signIn

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "username": "string",
    "token": "jwt string"
}
```

### GET /jokes/random

description: 
  get one available random jokes from server

Request:

- headers: token (string)

Response:

- status: 200
- body:

```json
{
    "joke": {
        "id": 6,
        "category": "Miscellaneous",
        "setup": "My mother said, \"You won't amount to anything because you always procrastinate.\"",
        "delivery": "I said, \"Oh yeah... Just you wait.\"",
        "createdAt": "2020-05-18T04:18:49.689Z",
        "updatedAt": "2020-05-18T04:18:49.689Z"
    }
}
```

### POST /jokes
Request:

- headers: token (string)

- data:

```json
{
  "category": "string",
  "setup": "string",
  "delivery": "string"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
    "joke": {
        "id": 11,
        "category": "Miscellaneous",
        "setup": "ikan ikan apa yang berhenti?",
        "delivery": "Ikan Pause, hiya hiya",
        "updatedAt": "2020-05-18T05:02:29.398Z",
        "createdAt": "2020-05-18T05:02:29.398Z"
    }
}
```
​

### POST /favourites

description: 
  add a joke to user favourite

Request:

- headers: token (string)

- data:

```json
{
  "JokeId": number
}
```

Response:

- status: 201
- body:

```json
{
    "favourite": {
        "id": number,
        "UserId": number,
        "JokeId": number,
        "updatedAt": "2020-05-18T05:11:57.044Z",
        "createdAt": "2020-05-18T05:11:57.044Z"
    }
}
```

### GET /favourites

description: 
  show current user favourite jokes

Request:

- headers: token (string)

Response:

- status: 200
- body:

```json
{
    "favourites": [
        {
            "id": 1,
            "Joke": {
                "id": 11,
                "category": "Miscellaneous",
                "setup": "ikan ikan apa yang berhenti?",
                "delivery": "Ikan Pause, hiya hiya",
                "createdAt": "2020-05-18T05:02:29.398Z",
                "updatedAt": "2020-05-18T05:02:29.398Z"
            }
        },
        {
            "id": 2,
            "Joke": {
                "id": 7,
                "category": "Miscellaneous",
                "setup": "Ayam ayam apa yang luas?",
                "delivery": "Ayam semesta",
                "createdAt": "2020-05-18T04:18:49.689Z",
                "updatedAt": "2020-05-18T04:18:49.689Z"
            }
        }
    ]
}
```
​

