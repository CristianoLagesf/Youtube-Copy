import Fastify from 'fastify'
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"]
})

async function bootstrap() {
  const fastify = Fastify({
    logger: true,

  })
  await fastify.register(cors, {
    origin: true,
  })
  fastify.get("/users", async () => {
    const user = await prisma.user.findFirst({
      where: {
        name: 'Cristiano'
      }
    })
    return { user }
  })
  await fastify.listen({ port: 3333 })
}

bootstrap()