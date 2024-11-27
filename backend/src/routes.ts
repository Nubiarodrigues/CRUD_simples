import {FastifyInstance,FastifyPluginOptions,FastifyRequest,FastifyReply,} from "fastify";
import { CriarClienteController } from "./controllers/CriarClienteController";
import { ListarClientesController } from "./controllers/ListarClientesController";
import { DeletarClienteController } from "./controllers/DeletarClienteController";

export async function routes(fastify: FastifyInstance,options: FastifyPluginOptions) {

// endoint (teste)
fastify.get("/teste",async (request: FastifyRequest, reply: FastifyReply) => {
  return { ok: true };
});

// endoint (cadastrar)
fastify.post("/cadastrar", async (request: FastifyRequest, reply: FastifyReply) => {
  return new CriarClienteController().handle(request, reply);
});

// endoint (listar)
fastify.get("/listar", async (request: FastifyRequest, reply: FastifyReply) => {
  return new ListarClientesController().handle(request, reply);
});

// endoint (deletar)
fastify.delete("/deletar", async (request: FastifyRequest, reply: FastifyReply) => {
  return new DeletarClienteController().handle(request, reply);
});

}
