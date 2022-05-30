using SistemaOctoTi.Models;
using System.Collections.Generic;

namespace SistemaOctoTi.Repositories
{
    public interface ITelefoneRepositorio
    {
        TelefoneModel Atualizar(TelefoneModel telefone);
        TelefoneModel BuscarPorId(int id);  
        List<TelefoneModel> BuscarTodos();
        TelefoneModel Adicionar(TelefoneModel telefone);
    }
}