import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
const app = fastify()

app.register(cors, {
  origin: '*',
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then((address) => {
    console.log(`🔥 server listening on ${address}`)
  })
