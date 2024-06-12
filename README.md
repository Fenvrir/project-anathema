## Anathema Project

## Webpack

npm i -y = инифиализировать объект с дефолтными настроками.

1.  1. На вход Webpack-у мы передаём кучу файлов, а он уже генерирует для нас статику. Всего лишь несколько файлов.
    2. Webpack + webpack cli
    3. html-webpack-plugin
    4. webpack progress plugin - прогресс бар в cli
    5. typescript + ts-loader
    6. webpack config ts file - позволяет писать конфиг вебпака на ts
    7. настройка ts-config

2.  1. В корне создаём папку config, там хранится вся конфикурация приложения. Webpack, eslint и тд.
    2. создаём отдельные файлы в папке build для плагинов, лоадеров и резолверсов.
    3. создаём папку types, а там создаём config.ts и внутри прописываем пути, и описываем типы сборок ( продакшин или девелопмент)
    4. всё остальное из webpack.config переносим в buildwebpack.config

3.  DevServer -
    1. Устанавливаем WebpackDevServer
    2. Создаём buildDevServers
    3. Добавляем port  в config.ts
    4. Добавить BuilddevServer в основной конфиг
    5. Добавляем переменные окружения в scipts: {}
    6. Добавить типы для переменных окружения
    7. Отключить соурсМапы  при продакшине.

