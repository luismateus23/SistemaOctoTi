using SistemaOctoTi.Models;
using System.Collections.Generic;

namespace SistemaOctoTi.Repositories
{
    public interface IEnderecoRepositorio
    {
        bool Apagar(int id);
        EnderecoModel Atualizar(EnderecoModel endereco);
        EnderecoModel BuscarPorId(int id);  
        List<EnderecoModel> BuscarTodos();
        EnderecoModel Adicionar(EnderecoModel endereco);
        HomeIndexModel AdicionarHome(HomeIndexModel endereco);
    }
}