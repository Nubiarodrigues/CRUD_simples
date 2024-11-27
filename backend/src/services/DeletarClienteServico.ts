import prismaClient from "../prisma";

interface DeletarClienteProps{
    id: string;
}

class DeletarClienteServico{
    async executar({id}: DeletarClienteProps){
        if(!id){
            throw new Error("Solicitação inválida!")
        }

    const encontrarCliente = await prismaClient.cliente.findFirst({
        where: {
            id: id
        }
    });

    if(!encontrarCliente){
        throw new Error("Cliente não existe.");
    }

    await prismaClient.cliente.delete({
        where: {
            id: encontrarCliente.id
        }
    });

    return { msg: "Deletado com sucesso!" }


    }
}

export { DeletarClienteServico }