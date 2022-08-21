## nodejs-server-graphql

### Depp or Lib I use

- nodemon
- graphql
- apollo-server
- prisma
- @prisma/client

### How to use

- clone this repo

```
  git clone git@github.com:Dwipasca/nodejs-server-graphql.git
```

- go to the project directory

```
  cd nodejs-server-graphql
```

- install depp

```
  npm i | npm install
```

- migrate database sqlite with prisma

```
  npx prisma migrate dev
```

- name your migrate, you can name it as "init" for the first time you clone this project

- generate prisma client

```
  npx prisma generate
```

- run project

```
  npm run dev
```

- run prisma studio (optional) (show database)

```
  npx prisma studio
```

- open in your browser with url http://localhost:4000/graphql

### Manipulation file schema.prisma

- after you add some model in file schema.prisma run this command

```
  npx prisma migrate dev --name "[name aaction model]"
  // for example
  npx prisma migrate dev --name "add-blog-model"
```

- re-generate prisma client

```
  npx migrate generate
```
