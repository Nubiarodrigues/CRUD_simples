// imports
import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ msg: error.message });
})

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 8000 });
    console.log("Servidor rodando na porta:  8000");
  } catch (err) {
    process.exit(1);
  }
};

start();
