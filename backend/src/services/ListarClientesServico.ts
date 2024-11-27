import prismaClient from "../prisma";

class ListarClientesServico{

    async executar() {
        const clientes = await prismaClient.cliente.findMany();

        return clientes;
    }


}

export { ListarClientesServico }