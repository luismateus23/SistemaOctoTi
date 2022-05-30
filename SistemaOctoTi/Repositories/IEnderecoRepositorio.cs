using SistemaOctoTi.Models;
using System.Collections.Generic;

namespace SistemaOctoTi.Repositories
{
    public interface IEnderecoRepositorio
    {
        EnderecoModel Atualizar(EnderecoModel endereco);
        EnderecoModel BuscarPorId(int id);  
        List<EnderecoModel> BuscarTodos();
        EnderecoModel Adicionar(EnderecoModel endereco);   
    }
}