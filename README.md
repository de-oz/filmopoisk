# ШРИ 2024, ДЗ «Реакт. Построение приложения»

## Условие задания

Мы продолжаем дорабатывать сервис Фильмопоиск. В этот раз к нам пришел менеджер с новой идеей, он хочет полностью обновить фронтенд для сервиса. Менеджер принес обновленный дизайн и по пунктам описал новые требования к сервису:

- Пользователь может авторизоваться;
- На первом этапе в проекте 2 страницы: главная со списком фильмов и отдельная страница для фильма;
- На главной пользователь может искать фильм по названию, фильтровать по жанру и году выхода;
- При клике на снипет открывается страница фильма;
- Пользователь может поставить оценку каждому фильму.

[Дизайн](https://www.figma.com/design/ucG4WHfOZOEa5GtnXzGs7M/Макеты-Билетопоиск)

Вместе с этими требованиями и новым дизайном мы пошли к техлиду и согласовали с ним технические требования для проекта:

- У проекта должен быть свой репозиторий;
- Архитектура может быть любой, но главное — удобной для вас. Для поиска вдохновения техлид посоветовал заглянуть сюда https://feature-sliced.design;
- За основу возьмем React;
- За роутинг отвечает библиотека react-router-dom;
- В качестве стейт-менеджера используем Redux, redux-toolkit (rtk-query для запросов), не забываем про то что нужен будет react-redux;
- Код желательно писать на typescript;
- Желательно контролировать чистоту кода через eslint, prettier;
- Для удобства работы с css можно использовать classNames;
- В требованиях от менеджера есть поисковая строка, ручка search не должна дергаться на каждый введенный символ;
- Пользователь на бэкенде пока не проработан, поэтому проставленную оценку храним в local Storage;
- Фильтры будут определены на фронте и иметь следующую структуру:

Жанры:

```ts
const GENRES = {
    '0': 'Не выбран',
    comedy: 'Комедия',
    drama: 'Драма',
    action: 'Боевик',
    thriller: 'Триллер',
    horror: 'Ужасы',
    family: 'Семейный',
    cartoon: 'Анимированный',
    fantasy: 'Фэнтези',
    romance: 'Романтика',
    adventure: 'Приключения',
    musical: 'Мьюзикл',
    war: 'Военный',
}
```

Годы выхода:

```ts
const YEARS = {
    '0': 'Не выбран',
    '2009': '2009',
    '2008': '2008',
    '2007': '2007',
    '2006': '2006',
    '1990-2005': '1990-2005',
    '1950-1989': '1950-1989',
}
```

- Пользователь наверняка захочет шарить ссылку с фильтрами, поэтому их значение нужно сохранять;
- Авторизацию реализуем в модальном окне;
- Оценку фильму можно поставить только в случае, если пользователь авторизован.

Дизайн система для проекта пока не готова, поэтому все UI элементы нужно будет написать самостоятельно, не забывая о потенциальном переиспользовании.

Коллега по команде совсем недавно увлекся новым фреймворком Next и предложил вам попробовать написать еще одну версию проекта на нем и показать ее техлиду.

Бэкенд для сервиса вы разрабатывали самостоятельно в дополнительном задании для NodeJS. Если вы его не сделали, то ничего страшного, коллеги по команде подхватили эту задачу и доделали все нужные методы.

[API](https://disk.yandex.ru/d/89vxMorGgTVKCg)

Задача:

Создать новый клиент для сервиса Фильмопоиск, который будет соответствовать дизайну, требованиям менеджера и техлида. У сервиса должно быть 2 реализации:

- SPA
- версия на Next

В ответ на задание необходимо оставить ссылку на GitHub репозиторий. Миграцию на Next стоит сделать в отдельной ветке для удобства проверки. Сделайте ПР из этой ветки в рабочую ветку с приложением на React. Это задание будет проверяться в формате кросс-проверок.
