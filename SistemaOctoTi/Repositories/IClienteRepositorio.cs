using SistemaOctoTi.Models;
using System.Collections.Generic;

namespace SistemaOctoTi.Repositories
{
    public interface IClienteRepositorio
    {

        bool Apagar(int id);
        ClienteModel Atualizar(ClienteModel cliente);   
        ClienteModel BuscarPorId(int id);
        List<ClienteModel> BuscarTodos();
        ClienteModel Adicionar(ClienteModel cliente);
    }
}