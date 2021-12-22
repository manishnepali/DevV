const api = require('./api');
const PORT = 3003;

api.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

