<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Starting app back-end
</h3>

<p align="center">
  <a href="#rocket-about-the-application">About the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-installed-packages">Installed packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<img alt="Insomnia" src=./src/assets/screen-insomnia.gif />

## :rocket: About the application

Continuation of the [First project in Node.js] (https://github.com/bruno-fialho/primeiro-projeto-node), using database with TypeORM and sending files with Multer!

This is an application to create new users, update avatar with Multer, create and list schedules, storing everything in the database.

In addition, it is also able to create a new user session authenticated by a [JSON Web Token] (https://jwt.io/).

### Application Routes

The application has the following routes:

- **`POST /sessions`**: The route must receive `email` and `password` within the body of the request. When starting a new session, it returns an object with the following format:

```json
{
  "mappedUser": {
    "id": "uuid",
    "name": "Bruno",
    "email": "bruno@rocketseat.com",
    "avatar": "f3399600f3ff0917c9f7-Bruno.JPG",
    "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

- **`POST /users`**: The route must receive `name`, `email` and `password` within the body of the request. When creating a new user, it stores in the database and returns an object with the following format:

```json
{
  "mappedUser": {
    "id": "uuid",
    "name": "Bruno",
    "email": "bruno@rocketseat.com",
    "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
  }
}
```

- **`PATCH /users/avatar`**: The route must allow the import of an image file, adds the file in the `tmp` folder, deleting the previous file if it exists, and stores the location of the file in the database . When updating the image, it returns an object with the following format:

```json
{
  "mappedUser": {
    "id": "uuid",
    "name": "Bruno",
    "email": "bruno@rocketseat.com",
    "avatar": "f3399600f3ff0917c9f7-Bruno.JPG",
    "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
  }
}
```

- **`POST /appointments`**: The route must receive `provider_id` and `date` within the body of the request, with `date` equal to `Timestamp => ISO-8601`. When registering a new schedule, it stores in the database and returns an object with the following format:

```json
{
  "id": "uuid",
  "provider_id": "uuid",
  "date": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
  "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
  "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
},
```

- **`GET /appointments`**: This route should return a listing with all the schedules registered in the database. This route returns an object with the following format:

```json
[
  {
    "id": "uuid",
    "provider_id": "uuid",
    "date": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
  },
  {
    "id": "uuid",
    "provider_id": "uuid",
    "date": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
  }
]
```

## :cd: Installed packages

The following is a list of installed packages:

- [express](https://www.npmjs.com/package/express)
- [typescript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev#readme)
- [uuid](https://www.npmjs.com/package/uuid)
- [date-fns](https://github.com/date-fns/date-fns#readme)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [express-async-errors](https://github.com/davidbanham/express-async-errors#readme)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [multer](https://github.com/expressjs/multer#readme)
- [pg](https://github.com/brianc/node-postgres)
- [reflect-metadata](http://rbuckton.github.io/reflect-metadata)
- [typeorm](https://github.com/typeorm/typeorm#readme)

	Opcional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.
