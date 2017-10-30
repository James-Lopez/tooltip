const express = require('express')
const app = express()
app.use(express.static('./public'))

app.listen(1738, console.log('Fetty Wap opened port 1738.'))
