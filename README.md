# NLW Valoriza

## Regras

- Cadastro de usuário

  [ X ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ X ] Não é permitido cadastrar usuário sem e-mail


- Cadastro de TAG

  [ X ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ X ] Não é permitido cadastrar tag sem nome

  [ X ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ X ] Não é permitido um usuário cadastrar um elogio para si

  [ X ] Não e permitido cadastrar elogios para usuário inválidos

  [ X ] O usuário precisa estar autenticado na aplicação

<br>

# Configuração .env
```
TYPEORM_CONNECTION=
TYPEORM_HOST=
TYPEORM_USERNAME=
TYPEORM_PASSWORD=
TYPEORM_DATABASE=
TYPEORM_PORT=
# TYPEORM_SYNCHRONIZE=true
TYPEORM_LOGGING=
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/entities/*.ts
TYPEORM_ENTITIES_DIR=src/entities
PORT=
API_KEY=
```

# Geração da API KEY
Executar o comando
```
node -e "console.log( require('crypto').randomBytes(256).toString('base64'))"
```

# Percorrendo a próxima milha

## Aplicação hospeada no heroku
### Config Vars para Heroku
```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=<conf db heroku>
TYPEORM_USERNAME=<conf db heroku>
TYPEORM_PASSWORD=<conf db heroku>
TYPEORM_DATABASE=<conf db heroku>
TYPEORM_PORT=<conf db heroku>
TYPEORM_MIGRATIONS=build/database/migrations/*.js
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=build/entities/*.js
TYPEORM_ENTITIES_DIR=src/entities
TYPEORM_DRIVER_EXTRA={"ssl":{ "rejectUnauthorized": false }}
PORT=
API_KEY=<gerar novo>
```

Obs: migrations e entities apontam para arquivos `.js` da pasta `build`. Caso não tenha um certificado, é possível desabilitar a validação do SSL para se conectar com o banco de dados addon do heroku. Uma dica é testar a conexão com o banco de dados do heroku usando o beekeeper usando a URI e desabilitando a flag `Reject Unauthorized` após ativar o `Enable SSL`.

<br>

## Exemplo de rota funcionando no heroku
https://nlw-valoriza.herokuapp.com/tags

<br>

## Aplicação front-end
Foi desenvolvido uma aplicação em Angular conectado ao backend deste projeto hospedado no Heroku.

Para testar, visite o seguinte link:
https://nlw-valoriza-app.vercel.app

Repositório: https://github.com/danilok/nlw-valoriza-app

<br>

## Novas funcionalidades
- Recuperar dados de usuário por Id: `/users/:id`
- Deletar tag: `/tags/:id`
