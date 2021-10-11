module.exports =[{"text":"Какое из определений наилучшим образом подходит для описания практики TDD?","tags":["tdd","test-driven development","разработка через тестирование"],"answers":{"correct":["Разработка состоит из коротких циклов \"красный-зеленый-рефакторинг\""],"incorrect":["Тестировщики помогают разработчикам писать тесты","Разработчики пишут тесты самостоятельно","Сомнительная практика, не применима в сложных системах, т.к. нельзя сразу определить требования"]},"description":"Практика TDD (test-driven development, разработка через тестирование) состоит из коротких циклов \"красный-зеленый-рефакторинг\". Цикл начинается с написания теста на ещё несуществующий код - \"красная фаза\". Далее пишется необходимый код для прохождения этого теста - \"зелёная фаза\". Цикл заканчивается рефакторингом - улучшение структуры кода, и существующие тесты помогают разработчику убедиться в работоспособности функциональности. Также можно опубликовать свои изменения в системе контроля версий после окончания цикла. Подробнее в [wiki](https://technical-excellence.ru/wiki/TDD)."},{"text":"Что такое концепция test first design?","tags":["tdd","test-driven development","разработка через тестирование"],"answers":{"correct":["Писать тесты перед написанием кода"],"incorrect":["Покрыть весь код тестами","Покрыть существующий код тестами, перед тем, как писать новый","Продумывать тесты перед написанием кода"]},"description":"Test first design подразумевает написание тестов, которые являются требования для создаваемой системы. Если тесты отложить после написания основного кода, то смысл в них теряется, что приводит к тому, что часто на них пропускают в попытке сделать проект быстрее. Подробнее в [wiki](https://technical-excellence.ru/wiki/TDD)."},{"text":"Какая польза от использования практики TDD?","tags":["tdd","test-driven development","разработка через тестирование"],"answers":{"correct":["Помогает улучшить качество и снизить количество ошибок","Ускоряет процесс разработки в целом","Заставляет создавать тесты, которые просто автоматизировать.","Помогает хорошему дизайну и разделению проблем."],"incorrect":[]},"description":"Все ответы верные. Подробнее в [wiki](https://technical-excellence.ru/wiki/TDD)."},{"text":"Что поддерживает CI (непрерывную интеграцию)?","tags":["сi","continuous integration"],"answers":{"correct":["Слияние всех веток в общую не менее 1 раза в день","Наличие и запуск автотестов для каждой сборки","Наличие \"фича тогглов\" (feature toggles) для неготовых фич"],"incorrect":["Наличие в команде специалистов по интеграционному тестированию"]},"description":"CI (непрерывная интеграция) - практика разработки программного обеспечения, которая заключается в постоянном слиянии рабочих копий в общую основную ветвь разработки (до нескольких раз в день) и выполнении частых автоматизированных сборок проекта для скорейшего выявления потенциальных дефектов и решения интеграционных проблем. Подробнее в [wiki](https://technical-excellence.ru/wiki/CI)."},{"text":"Почему стоит автоматизировать сборку?","tags":["сi","continuous integration"],"answers":{"correct":["Она даёт быструю обратную связь о том, что ПО остаётся в готовом для сборки состоянии и не содержит ошибок конфигурации"],"incorrect":["Без неё нельзя полностью проверить работоспособность вашей системы","Без неё нельзя выйти в релиз","Того требуют правила компании"]},"description":"Даёт быструю обратную связь о том, что ПО остаётся в готовом для сборки состоянии и не содержит ошибок конфигурации. Подробнее в [wiki](https://technical-excellence.ru/wiki/CI)."},{"text":"Укажите преимущества Непрерывной Интеграции (Continuous Integration)?","tags":["сi","continuous integration"],"answers":{"correct":["Снижает риск и усилия по интеграции","Появляется быстрая обратная связь о влиянии изменений на систему"],"incorrect":["Улучшает читаемость кода","Удлиняет процесс разработки целиком"]},"description":"Снижается риск и усилия по интеграции, появляется быстрая обратная связь о влиянии изменений на систему.  Подробнее в [wiki](https://technical-excellence.ru/wiki/CI)."},{"text":"Что **НЕ** является принципом SOLID?","tags":["solid","design patterns","clean code"],"answers":{"correct":["Принцип внедрения интерфейсов (The Interface Injection Principle)"],"incorrect":["Принцип единой ответственности (The Single Responsibility)","Принцип открытости/закрытости (The Open Closed Principle)","Принцип инверсии зависимостей (The Dependency Inversion Principle)"]},"description":"SOLID - набор и из 5 принципов проектирования, получивший название по первым буквам этих принципов. Принципа внедрения интерфейсов (The Interface Injection Principle) в нём нет. Подробнее в [wiki](https://technical-excellence.ru/wiki/SOLID)."},{"text":"Один из пяти принципов проектирования \"SOLID\". Этот принцип говорит о том, что слишком \"толстые\" интерфейсы необходимо разделять на более маленькие и специфические, чтобы программные сущности маленьких интерфейсов знали только о методах, которые необходимы для их клиентов.","tags":["solid","design patterns","clean code"],"answers":{"correct":["Принцип разделения интерфейсов (Interface Segregation Principle)"],"incorrect":["Принцип единой ответственности (The Single Responsibility)","Принцип открытости/закрытости (The Open Closed Principle)","Принцип внедрения интерфейсов (The Interface Injection Principle)"]},"description":"Принцип разделения интерфейсов (Interface Segregation Principle). Подробнее в [wiki](https://technical-excellence.ru/wiki/InterfaceSegregationPrinciple)."},{"text":"Что является архитектурой программной системы?","tags":["ddd","clean architecture","design patterns"],"answers":{"correct":["Исходный код"],"incorrect":["Документация","Артефакты, разработанные отделом архитектуры","Системная диаграмма"]},"description":"Только исходный код является настоящей архитектурой, остальные источники являются производными, т.к. требует их \"ручной\" актуализации при изменении исходного кода. Подробнее в [wiki](https://technical-excellence.ru/wiki/)."},{"text":"Укажите критерии \"хорошей\" архитектуры ПО","tags":["ddd","clean architecture","design patterns"],"answers":{"correct":["Позволяет большинство решений о реализации принять в последний момент","Имеет слабую связанность (low coupling) и высокое зацепление (high cohesion)"],"incorrect":["Детально описано отделом архитекторов ПО","Содержит исчерпывающую модель данных, чтобы не допустить изменения при появлении новых бизнес-правил"]},"description":"Позволяет большинство решений о реализации принять в последний момент и имеет слабую связанность (low coupling) и высокое зацепление (high cohesion). Подробнее в [wiki](https://technical-excellence.ru/wiki/)."},{"text":"Что такой \"парное программирование\" (PP, pair programming)?","tags":["pp","pair programming","mob programming"],"answers":{"correct":["Два члена команды пишут код вместе за одним компьютером, постоянно давая друг другу обратную связь"],"incorrect":["Два члена команды пишут код отдельно. Третий, обычно тестировщик, собирает их в пару при интеграции их кода","Разработчик и тестировщик пишут и тестируют код отдельно, а потом объединяются для проверки всей системы","Руководство сравнивает всех разработчиков \"попарно\", чтобы выделить лучших"]},"description":"Два члена команды пишут код вместе за одним компьютером, постоянно давая друг другу обратную связь. Подробнее в [wiki](https://technical-excellence.ru/wiki/PairProgramming)."},{"text":"Частный случай парного программирования, при котором вся команда работает на одном и том же, в то же время, в том же пространстве, и на том же компьютере.","tags":["pp","pair programming","mob programming"],"answers":{"correct":["Mob-программирование"],"incorrect":["Такого подхода нет, т.к. каждый является специалистом в своей области","Экстремальное программирование","Скрам"]},"description":"Mob-программирование по определению работа всей группой над одним и тем же документом, участком кода и т.д. Подробнее в [wiki](https://technical-excellence.ru/wiki/MobProgramming)."},{"text":"Это проверенное и готовое к использованию решение. Это не класс и не библиотека, которую можно подключить к проекту, это нечто большее. Он не зависит от языка программирования, не является законченным образцом, который может быть прямо преобразован в код и может быть реализован по-разному в разных языках программирования.","tags":["solid","design patterns","clean code"],"answers":{"correct":["Шаблон проектирования (Design Pattern)"],"incorrect":["Доказанная на практике гипотеза (Proof of Concept)","Шаблонный метод (Template method)","Программирование через поиск ответов в Интернете (Stackoverflow programming)"]},"description":"Шаблон проектирования (Design Pattern). Подробнее в [wiki](https://technical-excellence.ru/wiki/DesignPatterns)."},{"text":"Что является **антипаттерном** в ООП?","tags":["solid","design patterns","clean code"],"answers":{"correct":["Божественный объект (God object)"],"incorrect":["Фасад (Facade)","Шаблонный метод (Template method)","Адаптер (Adapter)"]},"description":"Антипаттернами называют антиподов паттернов проектирования. Если последние представляют собой \"хорошие\" решения часто возникающих проблем в проектирование, то антипаттерны наоборот ухудшают решение с точки зрения дальнейшей поддержки и развития. Божественный объект (God object) - способ, при котором вся логика не зависимо от слоёв и абстракций содержится в одном объекте/классе. Подробнее в [wiki](https://technical-excellence.ru/wiki/DesignPatterns)."},{"text":"Шаблон проектирования (design pattern), гарантирующий, что в приложении будет единственный экземпляр некоторого класса, и предоставляющий глобальную точку доступа к этому экземпляру. Как он называется?","tags":["solid","design patterns","clean code"],"answers":{"correct":["Одиночка (Singleton)"],"incorrect":["Создатель (Creator)","Принцип только однажды (Exactly Once)","Божественный объект (God Object)"]},"description":"Одиночка (Singleton) согласно его определению. Подробнее в [wiki](https://technical-excellence.ru/wiki/DesignPatterns)."},{"text":"Важный принцип объектно-ориентированного программирования, используемый для уменьшения связанности (coupling) в программных системах.","tags":["solid","design patterns","clean code"],"answers":{"correct":["Инверсия Управления (InversionOfControl)"],"incorrect":["Circuit Breaker","Принцип единственной ответственности (Single-Responsibility Principle)","Spring Framework"]},"description":"Одиночка (Singleton) согласно его определению. Подробнее в [wiki](https://technical-excellence.ru/wiki/InversionOfControl)."},{"text":"Что является метриками качества исходного кода?","tags":["design","code quality"],"answers":{"correct":["Цикломатическая сложность","Связанность (coupling) классов"],"incorrect":["Скорость прохождения ревью (code review)","Процент покрытия тестами"]},"description":"Покрытие тестами не является метрикой качества исходного кода.Код может быть \"чистыми\" даже без тестов. На практики такое маловероятно, т.к. подход TDD, в котором цикл начинается с тестов, гарантирует хорошее качество кода и слабосвязанный дизайн. Подробнее в [wiki](https://technical-excellence.ru/wiki/CleanCode)."},{"text":"Продолжите фразу \"Унаследованный код (legacy code) - это код, ...\"","tags":["design","code quality","legacy code"],"answers":{"correct":["не покрытый тестами"],"incorrect":["доставшийся в наследство","зависящий от устаревших фреймворков или технологий","в котором никто не разбирается"]},"description":"Покрытие тестами не является метрикой качества исходного кода.Код может быть \"чистыми\" даже без тестов. На практики такое маловероятно, т.к. подход TDD, в котором цикл начинается с тестов, гарантирует хорошее качество кода и слабосвязанный дизайн. Подробнее в [wiki](https://technical-excellence.ru/wiki/LegacyCode)."},{"text":"Цикломатическая сложность (Cyclomatic Complexity), как метрика качества исходного кода, зависит от","tags":["design","code quality","legacy code"],"answers":{"correct":["Количества условных операторов ветвления"],"incorrect":["Количества операторов цикла","Количества строк кода","Количества операторов присваивания"]},"description":"Цикломатическая сложность (Cyclomatic Complexity) - структурная (или топологическая) мера сложности компьютерной программы. Напрямую зависит от количества условных операторов. Мера была разработана Томасом Дж. Маккейбом в 1976 году. Подробнее в [wiki](https://technical-excellence.ru/wiki/)."},{"text":"Как нужно выплачивать технический долг?","tags":["design","code quality","legacy code"],"answers":{"correct":["Технический долг стоит выплачивать как можно скорее, чтобы % по нему не \"задушили\" проект"],"incorrect":["Выделить бюджет и поручить специальной команде","В ходе стабилизационного и/или технического спринта","Когда закончатся требования у заказчика"]},"description":"Метафора программной инженерии, обозначающая накопленные в программном коде или архитектуре проблемы, связанные с пренебрежением к качеству при разработке программного обеспечения и вызывающие дополнительные затраты труда в будущем. Технический долг (Technical Debt). Подробнее в [wiki](https://technical-excellence.ru/wiki/TechnicalDebt)."},{"text":"Какая цель рефакторинга?","tags":["design","code quality","legacy code"],"answers":{"correct":["Улучшить читаемость и упростить дальнейшее внесение изменений"],"incorrect":["Поместить весь код в один файл для удобства ревью (code review) и печати","Улучшить скорость работы приложения","Исправить замечания с ревью (code review)"]},"description":"Улучшить читаемость и упростить дальнейшее внесение изменений. Подробнее в [wiki](https://technical-excellence.ru/wiki/Refactoring)."},{"text":"Как можно описать термин \"покрытие исходно кода\" (code coverage)?","tags":["design","code quality","legacy code"],"answers":{"correct":["Процент исходного кода, который выполняется при запуске тестов  "],"incorrect":["Процент исходного кода, включённого в сборку","Количество разработчиков, которое необходимо для понимания кодовой базы всей системы","Практика, которая позволяет содержать код без дефектов"]},"description":"Улучшить читаемость и упростить дальнейшее внесение изменений. Подробнее в [wiki](https://technical-excellence.ru/wiki/)."},{"text":"К какому уровню покрытия кода тестами нужно стремиться?","tags":["design","code quality","legacy code"],"answers":{"correct":["Покрытие кода тестами — инструмент, который позволяет искать непокрытую тестами логику. Сам по себе покрытие не является целью."],"incorrect":["85%","100%  ","теста не обязательны, если код работает без ошибок"]},"description":"Роберт Мартин утверждает, что если есть часть продукта, не покрытая тестами, то за неё заказчик платить не должен, потому что он не может быть уверен в правильности её работы. При использовании практики TDD у вас не может появиться кода, которые не использовался бы при запуске тестов. Подробнее в [wiki](https://technical-excellence.ru/wiki/TDD)."},{"text":"Что может показать метафора, называемая \"Пирамидой Тестирования\"?","tags":["design","code quality","tests"],"answers":{"correct":["Распределение количество тестов в зависимости от их уровня — много быстрых и дешёвых, мало долгих и дорогих."],"incorrect":["Иерархию в группе тестирования, где руководитель на вершине, а рядовые сотрудники уровнями ниже.","Структуру сценариев приёмочного тестирования","Способ автоматизации, в котором тесты упорядочены по степени важности"]},"description":"Пирамида тестирования. Подробнее в [wiki](https://technical-excellence.ru/wiki/TestPyramid)."},{"text":"Какой тип тестирования поддается автоматизации в меньшей степени?","tags":["design","code quality","tests"],"answers":{"correct":["Исследовательское, потому не содержит предопределённых тестовых сценариев"],"incorrect":["Интеграционное, потому что есть зависимость от других систем","Нагрузочное, потому что дорого создавать стенд, аналогичный промышленному","Приемочное, потому что приёмку могут выполнять только люди"]},"description":"Исследовательское. Подробнее в [wiki](https://technical-excellence.ru/wiki/TestPyramid)."},{"text":"Из каких шагов состоит AAA-шаблон структуры модульных тестов?","tags":["design","code quality","tests"],"answers":{"correct":["Данные (Arrange)","Действие (Act)","Проверка (Assert)"],"incorrect":["Присваивание (Assign)"]},"description":"ААА-шаблон состоит это Arrange-Act-Assert. Подробнее в [wiki](https://technical-excellence.ru/wiki/UnitTest)."},{"text":"Выберите критерии хорошего модульно теста (unit test).","tags":["design","code quality","tests"],"answers":{"correct":["Проверяет только одного логическое утверждение","Независимый от других тестов","Достоверный (проверяет действительно то, что должен)","Быстрый","Маленький (настолько на сколько это возможно)"],"incorrect":[]},"description":"Все ответы верные. Подробнее в [wiki](https://technical-excellence.ru/wiki/UnitTest)."}];