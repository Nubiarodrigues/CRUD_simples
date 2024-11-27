import { useEffect, useState, useRef, FormEvent } from 'react';
import './App.sass';
import { api } from "./services/api";
import { getAllJSDocTags } from 'typescript';
import { ClienteProps } from "./interface/interfaceClient"
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {

  const [clientes, setClientes] = useState<ClienteProps[]>([]); 
  const nomeRef = useRef<HTMLInputElement | null>(null); 
  const emailRef = useRef<HTMLInputElement | null>(null); 

  async function carregarClientes(){
    const resposta = await api.get("/listar");
    setClientes(resposta.data);
  }

  useEffect(() => {
    carregarClientes();
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
   
    if(!nomeRef.current?.value || !emailRef.current?.value) return;

    const resposta = await api.post("/cadastrar", {
      nome: nomeRef.current?.value,
      email: emailRef.current?.value
    })

    setClientes(allClientes => [...allClientes, resposta.data]);
  }

async function deletar(id: string){
  try{
    await api.delete("/deletar", {
      params: {
        id: id
      }
    });

    const allClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(allClientes);


  }catch(error){
    console.log(error);
  }

  
}

  return (
    <div className="container">
      <main>
        <h1>Clientes</h1>

        <form className="form" onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input ref={nomeRef} type="text" id="name" placeholder="Digite seu nome completo..." />

          <label>E-mail:</label>
          <input ref={emailRef} type="email" id="email" placeholder="Digite seu email..." />

          <input type="submit" value="Cadastrar" />
        </form>

        <section className="clients">
          {clientes.map( (client) => (
              <article key={client.id} className="client">
              <p ><span>Nome:</span> {client.nome}</p>
              <p><span>E-mail:</span> {client.email}</p>
              <p><span>Status:</span> {client.status ? "ATIVO" : "INATIVO"}</p>

              <button className="delete-btn" aria-label="Excluir cliente" onClick={() => deletar(client.id) }>
                <i className="fas fa-trash"></i> 
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;

