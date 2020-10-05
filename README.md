<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Iniciando back-end do app
</h3>

<p align="center">
  <a href="#rocket-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-pacotes-instalados">Pacotes instalados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<img alt="Insomnia" src=./src/assets/screen-insomnia.gif />

## :rocket: Sobre a aplicação

Continução do [primeiro projeto em Node.js](https://github.com/bruno-fialho/primeiro-projeto-node),  usando banco de dados com TypeORM e envio de arquivos com Multer!

Essa é uma aplicação para criar novos usuários, atualizar avatar com o Multer, criar e listar agendamentos, armazenando tudo no banco de dados.

Além disso, também é capaz de criar uma nova sessão de usuário autenticado por um [JSON Web Token](https://jwt.io/).

### Rotas da aplicação

A aplicação tem as seguintes rotas:

- **`POST /sessions`**: A rota deve receber `email` e `password` dentro do corpo da requisição. Ao iniciar uma nova sessão, retorna um objeto com o seguinte formato:

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

- **`POST /users`**: A rota deve receber `name`, `email` e `password` dentro do corpo da requisição. Ao criar um novo usuário, armazena no banco de dados e retorna um objeto com o seguinte formato:

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

- **`PATCH /users/avatar`**: A rota deve permitir a importação de um arquivo de imagem, adiciona o arquivo na pasta `tmp`, deletando o arquivo anterior caso exista, e armazena o local do arquivo no banco de dados. Ao atualizar a imagem, retorna um objeto com o seguinte formato:

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

- **`POST /appointments`**: A rota deve receber `provider_id` e `date` dentro do corpo da requisição, sendo `date` igual a `Timestamp => ISO-8601`.  Ao cadastrar um novo agendamento, ele armazena no banco de dados e retoran um objeto com o seguinte formato:

```json
{
  "id": "uuid",
  "provider_id": "uuid",
  "date": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
  "created_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
  "updated_at": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
},
```

- **`GET /appointments`**: Essa rota deve retornar uma listagem com todos os agendamentos cadastrados no banco de dados. Essa rota retorna um objeto com o formato a seguir:

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

## :cd: Pacotes instalados

A seguir segue uma lista dos pacotes instalados:

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

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
