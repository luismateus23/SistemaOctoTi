using SistemaOctoTi.Data;
using SistemaOctoTi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaOctoTi.Repositories
{
    public class TelefoneRepositorio: ITelefoneRepositorio
    {
        private readonly BancoContext _bancoContext;
        public TelefoneRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        public TelefoneModel Adicionar(TelefoneModel telefone)
        {
            _bancoContext.Telefone.Add(telefone);
            _bancoContext.SaveChanges();

            return telefone;    
        }

        public TelefoneModel Atualizar(TelefoneModel telefone)
        {
            TelefoneModel telefoneDB = BuscarPorId(telefone.Id);
            if(telefoneDB == null)
            {
                throw new Exception("Houve um erro na Atualização do Telefone!");
            }

            telefoneDB.TipoTelefone = telefone.TipoTelefone;
            telefoneDB.DDD = telefone.DDD;
            telefoneDB.NumeroTelefone = telefone.NumeroTelefone;

            _bancoContext.Telefone.Update(telefoneDB);
            _bancoContext.SaveChanges();

            return telefoneDB;            
        }

        public TelefoneModel BuscarPorId(int id)
        {
            return _bancoContext.Telefone.FirstOrDefault(x => x.Id == id);
        }

        public List<TelefoneModel> BuscarTodos()
        {
            return _bancoContext.Telefone.ToList();
        }
    }
}
