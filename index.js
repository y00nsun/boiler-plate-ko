const express = require('express')
const app = express()  //새로운 express모듈 앱을 만듬
const port = 3000

// 몽고DB 연결하기
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://stella:<ansrkd0302>@boilerplate.bqpftvt.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})