const express = require('express')
const mongoose = require('mongoose')

// подключаем пакет боди-парсер для парсинга json
const bodyParcer = require('body-parser')
const authRoutes = require('./routes/auth')
const analitycsRoutes = require('./routes/analitycs')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const app = express()


// устанавливаем соединение с БД монгоДБ
mongoose.connect('')
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

// используем доп-плагины для получения json объекта
// urulencoded - защищает нас от атак на спецсимволы
app.use(bodyParcer.urlencoded({extended: true}))
// позволяет генерировать json объекты из url
app.use(bodyParcer.json())

// для логирования запросов
app.use(require('morgan')('dev'))

// для обработки cors запросов (кросс-доменные запросы, если клиент на другом домене)
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analitycs', analitycsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/position', positionRoutes)





module.exports = app