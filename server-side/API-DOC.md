# Movies API Documentation

## Endpoints :

List of available endpoints:

Endpoint Users:

- `POST /users/register`
- `POST /users/login`
- `POST /users/googleLogin`

Endpoint Motorcycles:

- `GET /motorcycles`
- `GET /motorcycles/:id`

Endpoint News:

- `GET /news`

Endpoint Rents:

- `POST /rents/payment/:id/:price/:trxcode`
- `PATCH /rents/:id`
- `POST /rents/:id`

&nbsp;

## ENDPOINT USERS

&nbsp;

## 1. POST /users/register

Request:

- body

```json
{
  "email": "user1@gmail.com",
  "password": "123456a"
}
```

_Response (201 - Created)_

```json
{
  "id": 2,
  "email": "user2@gmail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email is required"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "password is required"
}
```

&nbsp;

## 2. POST /users/login

Request:

- body

```json
{
  "email": "user1@gmail.com",
  "password": "123456a"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTkwODA5fQ.dq1UHx8G3ZlOckbMBLGhdCKYM4jxD4woy_33foxpO94",
  "user": {
    "id": 1,
    "email": "user1@gmail.com"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email or password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "invalid email or password"
}
```

&nbsp;

## 3. POST /users/googleLogin

Request:

- Sign in by Google Account

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTY2ODc0MzIyOX0.3dyj5eE6ebg7FidZLIFuwi1NQ472YmBf4l5vtRylz68",
  "user": {
    "id": 3,
    "email": "fernainggolanda@gmail.com"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email or password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "invalid email or password"
}
```

&nbsp;

## ENDPOINT MOTORCYCLES

&nbsp;

## 2. GET /motorcycles

Description:

- Get all motorcycle from database

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "type": "Astrea",
        "cc": 100,
        "price": 70000,
        "MerkId": 1,
        "facility": "Helm",
        "status": "available",
        "imageUrl": "https://fightomotive.com/wp-content/uploads/2022/06/ei_1656024566971-removebg-preview-238x225.png",
        "Merk": {
            "id": 1,
            "name": "Honda",
        }
    },
    ...,
]
```

&nbsp;

## 2. GET /motorcycles/:id

Description:

- Detail motorcycle by id

Request:

- headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY2ODUyMjQxM30.lzkf4NMjIv3Ra2wA2ocnUCj0Pmp8e_sY5X1YdjFOKQ0"
}
```

- params

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "type": "Astrea",
    "cc": 100,
    "price": 70000,
    "MerkId": 1,
    "facility": "Helm",
    "status": "available",
    "imageUrl": "https://fightomotive.com/wp-content/uploads/2022/06/ei_1656024566971-removebg-preview-238x225.png",
    "Merk": {
        "id": 1,
        "name": "Honda",
  }
}
```

_Response (404 - not found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## ENDPOINT NEWS

&nbsp;

## 1. GET /news

Description:

- Get all news from database

_Response (200 - OK)_

```json
[
    {
        "_type": "NewsArticle",
        "name": "Scientists demonstrate wireless power transmission from space to Earth for first time",
        "url": "https://www.msn.com/en-gb/news/techandscience/scientists-demonstrate-wireless-power-transmission-from-space-to-earth-for-first-time/ar-AA1ceEfv",
        "image": {
            "_type": "ImageObject",
            "thumbnail": {
                "_type": "ImageObject",
                "contentUrl": "https://www.bing.com/th?id=OVFT.EaSNbT4f_RjrrJuLGcVYay&pid=News",
                "width": 1200,
                "height": 608
            },
            "isLicensed": true
        },
        "description": "Scientists demonstrate wireless power transmission from space to Earth for first time - ‘To the best of our knowledge, no one has ever demonstrated wireless energy transfer in space’",
        "provider": [
            {
                "_type": "Organization",
                "name": "The Independent",
                "image": {
                    "_type": "ImageObject",
                    "thumbnail": {
                        "_type": "ImageObject",
                        "contentUrl": "https://www.bing.com/th?id=ODF.Itq1YaygZYquIY-bZPUV3w&pid=news"
                    }
                }
            }
        ],
        "datePublished": "2023-06-08T03:40:00.0000000Z"
    },
  ....,
]
```

&nbsp;

## ENDPOINT RENTS

&nbsp;

## 1. POST /rents/payment/:price/:trxcode

Request:

- headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTkwODA5fQ.dq1UHx8G3ZlOckbMBLGhdCKYM4jxD4woy_33foxpO94"
}
```

- params

```json
{
  "price": "integer",
  "trxcode": "string"
}
```

_Response (201 - Created)_

```json
{
    "token": "31cf1c9e-a348-4dd7-b81f-5bd9a0324461",
    "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/31cf1c9e-a348-4dd7-b81f-5bd9a0324461"
}
```

&nbsp;

## 2. PATCH /rents/:id

Request:

- headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTkwODA5fQ.dq1UHx8G3ZlOckbMBLGhdCKYM4jxD4woy_33foxpO94"
}
```

- params

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Motorcycle has been booked"
}
```

_Response (404 - not found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 3. POST /rents/:id

Request:

- headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTkwODA5fQ.dq1UHx8G3ZlOckbMBLGhdCKYM4jxD4woy_33foxpO94"
}
```

- params

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 2,
  "UserId": 1,
  "MotorcycleId": 1
}
```

_Response (404 - not found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Please login first!"
}
```
