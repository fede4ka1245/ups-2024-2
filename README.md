# Уральская проектная смена. Бэкенд. Задание 2. 

## Запуск в docker container'e
1) установи переменные .env файле
```
// mongo db url, например: mongodb://localhost:27017/admin
DATABASE_URI=<mongo db url>
```
2) запусти докер контейнер
```
docker compose up -d
```

## Запуск в режиме разработки
1) установи переменные .env файле
```
// mongo db url, например: mongodb://localhost:27017/admin
DATABASE_URI=<mongo db url>
```
2) установи библиотеки и запусти проект
```
npm i
npm run dev
```
