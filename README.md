# Инструкция
* [Необходимый софт](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B9-%D1%81%D0%BE%D1%84%D1%82)
* [Установка](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
* [Gulp задачи](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#gulp-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8)
  + [Watch (default)](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#watch-default)
  + [Build](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#build)
  + [Clean](https://github.com/alexander-shchetnikov/rso/new/master?readme=1#clean)
---
### Необходимый софт:
- [nodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
### Установка:
- Клонируем репозиторий
```
git clone https://github.com/alexander-shchetnikov/rso
```
- Установка необходимых npm пакетов
```
npm install
```
---
### Gulp задачи
#### Watch (default)
Запуск локального веб-сервера. Отслеживание изменений файлов (app/js/, app/pug/, app/sass/, app/*.html) с
запуском необходимых задач для обработки изменений + автообновление браузера
```
gulp
// или
gulp watch
// Возможно понадобиться глобально установить пакет gulp, касается всех задачи Gulp
npm i gulp -g
```
#### Build
Сборка проекта в директорию dist/
```
gulp build
```
#### Clean
Удаление директории dist/
```
gulp clean
```
