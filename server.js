const app = require('./backend/app')

const PORT = 3000
app.listen(PORT, () => {
  console.log(`BMI API running on port ${PORT}`)
})
