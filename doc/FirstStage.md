## Anathema Project

## Webpack

npm i -y = инифиализировать объект с дефолтными настроками.

1.  1. На вход Webpack-у мы передаём кучу файлов, а он уже генерирует для нас
       статику. Всего лишь несколько файлов.
    2. Webpack + webpack cli
    3. html-webpack-plugin
    4. webpack progress plugin - прогресс бар в cli
    5. typescript + ts-loader
    6. webpack config ts file - позволяет писать конфиг вебпака на ts
    7. настройка ts-config

2.  1. В корне создаём папку config, там хранится вся конфикурация приложения.
       Webpack, eslint и тд.
    2. создаём отдельные файлы в папке build для плагинов, лоадеров и
       резолверсов.
    3. создаём папку types, а там создаём config.ts и внутри прописываем пути, и
       описываем типы сборок ( продакшин или девелопмент)
    4. всё остальное из webpack.config переносим в buildwebpack.config

3.  DevServer -

    1. Устанавливаем WebpackDevServer
    2. Создаём buildDevServers
    3. Добавляем port в config.ts
    4. Добавить BuilddevServer в основной конфиг
    5. Добавляем переменные окружения в scipts: {}
    6. Добавить типы для переменных окружения
    7. Отключить соурсМапы при продакшине.

4.  React + react dome + установить зависимости.

    1. npm install react react-dom + типы для них
    2. Написать index.tsx компонент.
    3. добавиьт react-tsx в tsconfig
    4. Сделать component счётчик для примера
    5. Добавить лоадер для scss и css (style-loader и css-loader)

5.  Css и scss

    1. Добавить плагин MiniCssExtractPLugin
    2. Добавить лоадер MiniCssExtractPLugi.loader вместо style loadera
    3. ДОбавить условия. Для разработки не создавать css файлы, то есть
       отключать MiniCssExtractPLugi.loader
    4. Добавить правило css.modules в loader
    5. Добавить global.d.ts для module.ts
    6. Создать app.tsx и файл с обнуляющими стилями

6.  React-router-dom + types

    1. Добавить зависимости React-router-dom + types
    2. Создать папку с pages. Внутри два тестовых комопнента aboutPage и
       mainPage
    3. Подключаем их как роуты.
    4. Добавить historyApi в devServer, чтобы всё коректно работало при
       обновлении.
    5. Сделать lazyLoading/чанки для новых страничек.
       https://stackoverflow.com/questions/76340518/lazy-loading-routes-in-react-router-v6
    6. Обернуть в suspense, если надо.

7.  Организация стилей. Добавляем темы.

    1. Создаём папку styles. Внутри создаём папку variables и themes.
    2. Создать стейт для переключения между темами и создать контекст
       (themeContext)
    3. Сохранять тему в локалсторедж
    4. Создать отдельный хук для переключения темы.

8.  Classnames react library

    1. Создаём функцию classnames

9.  Внедряем архитиктуру Feature-sliced

    1. Добавляем абсолютные пути.
    2. Переделываем всю архитектуру.
    3. Создали свой снипет .vscode для react component
