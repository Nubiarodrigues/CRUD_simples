import prismaClient from "../prisma";

interface CriarClienteProps{
  nome: string;
  email: string;
}

class CriarClienteServico {
  async executar({nome, email}: CriarClienteProps) {
    
    if(!nome || !email){
      throw new Error("Preencha todos os campos!")
    }

    const cliente = await prismaClient.cliente.create({
      data: {
        nome, 
        email,
        status: true
      }
    })

    return cliente;
  }
}

export { CriarClienteServico };
