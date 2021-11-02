const express = require('express')
const path = require('path')
var morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000 // run web ở cổng nào
const app = express()
https://runkit.com/const port = 3000
//http logger
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))
// template engine
app.engine('.hbs', handlebars({
  extname: '.hbs',
}))
// sử dụng view engine bằng handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))


// định nghĩa tuyến đường(router)
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
// sử dugnj template engine để viết mã html ở nơi khác
//sử dụng package nodemon để khi thay đổi code k phải khởi động lại server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})