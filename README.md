## assignment-2

## THIS IS A USERS API

### how to use this **api**

### this is a user api [link](https://assignemt-2-2.vercel.app)

POST : api/users

- ## send Data this structure

```josn
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}
```

- ## If not sent according to this structure, an error will be thrown

GET : api/users

- ## this route call and response all users like

```josn
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },
        // more objects...
    ]
}
```

GET : api/user/:userid

- ## this API request specific ID
- response data like this

```josn
{
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

PUT : /api/users/:userId

- ## this API request and send data update user anu field
  - and response this structure

```josn
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

DELETE : /api/users/:userId

- ## specific user a delete send ID and response this structure

```josn
{
  "success": true,
  "message": "Users Deleted successfully!",
  "data": {
    "acknowledged": true,
    "deletedCount": 1
  }
}
```
