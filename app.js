import express  from 'express'
import bodyParser from 'body-parser'

import reminderRoutes from './routes/reminders.js'

const app = express()
const PORT = 3000;

app.use(bodyParser.json())

app.use('/reminders', reminderRoutes)

app.get('/', (_req, res) => {
    res.send('To-do website')
    
})

app.get('/health', (_req, res) => {
    res.status(200).json({connection: 'Alive'})
})


// app.put()

//app.patch()

// app.post()

// app.delete()




app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`)
})