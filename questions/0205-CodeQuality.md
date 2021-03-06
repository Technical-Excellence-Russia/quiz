# Вопрос

## Темы, теги

Design, code quality, legacy code

## Текст вопроса

К какому уровню покрытия кода тестами нужно стремиться?

## Варианты ответа

### Верный ответ(ы)

* Покрытие кода тестами — инструмент, который позволяет искать непокрытую тестами логику. Сам по себе покрытие не является целью.

### Другие ответ(ы)

* 85%
* 100%  
* теста не обязательны, если код работает без ошибок

## Объяснение ответа

Роберт Мартин утверждает, что если есть часть продукта, не покрытая тестами, то за неё заказчик платить не должен, потому что он не может быть уверен в правильности её работы. При использовании практики TDD у вас не может появиться кода, которые не использовался бы при запуске тестов. Подробнее в [wiki](https://technical-excellence.ru/wiki/TDD). Остались вопросы? Задавай в [нашем чате](https://t.me/technicalexcellenceru).
