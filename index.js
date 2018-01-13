const app = require('./app')
const PORT = process.env.PORT || 5000;
// console.log(app)
app.listen(PORT, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening on ${PORT}...`)
})