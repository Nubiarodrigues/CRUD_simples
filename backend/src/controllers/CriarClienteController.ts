import { FastifyRequest, FastifyReply } from "fastify";
import { CriarClienteServico } from "../services/CriarClienteServico";

class CriarClienteController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const {nome, email} = request.body as { nome: string, email: string};
    console.log(nome, email);

    const clienteServico = new CriarClienteServico();

    const cliente = await clienteServico.executar({nome, email});

    reply.send(cliente);
  }
}

export { CriarClienteController };
