# nuxt-kommersant

## Запуск приложения
# Локально
Запускается на Node -v 16.17.0
Проверить версию 

```bash
$ node -v
```
если стоит другая версия Node 
```bash
$ nvm use 16.17.0
```
Собрать зависимости
```bash
$ npm ci
```
Запустить проект
```bash
$ npm run dev
```

# Docker
Поставить docker
Собрать образ 
```bash
$ docker build .
```
Поставить docker compose

```bash
$ docker-compose up
```