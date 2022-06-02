using SistemaOctoTi.Models;
using System.Collections.Generic;

namespace SistemaOctoTi.Repositories
{
    public interface ITelefoneRepositorio
    {
        bool Apagar(int id);    
        TelefoneModel Atualizar(TelefoneModel telefone);
        TelefoneModel BuscarPorId(int id);  
        List<TelefoneModel> BuscarTodos();
        TelefoneModel Adicionar(TelefoneModel telefone);
        HomeIndexModel AdicionarHome(HomeIndexModel telefone);
    }
}