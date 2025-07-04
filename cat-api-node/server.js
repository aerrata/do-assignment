import app from './app.js'

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})

export default server
