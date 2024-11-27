import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarClienteServico } from "../services/DeletarClienteServico";

class DeletarClienteController{

    async handle(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string }

        const clienteService = new DeletarClienteServico();

        const cliente = await clienteService.executar({ id });

        reply.send(cliente);
    }

}

export { DeletarClienteController }