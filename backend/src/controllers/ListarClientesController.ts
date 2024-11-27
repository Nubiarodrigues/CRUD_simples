import { FastifyRequest, FastifyReply } from "fastify";
import { ListarClientesServico } from "../services/ListarClientesServico"

class ListarClientesController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const listarClientesServico = new ListarClientesServico();

        const clientes = await  listarClientesServico.executar();

        reply.send(clientes);
    }

}

export { ListarClientesController }