using SistemaOctoTi.Data;
using SistemaOctoTi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaOctoTi.Repositories
{
    public class ClienteRepositorio : IClienteRepositorio
    {
        private readonly BancoContext _bancoContext;

        public ClienteRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }
        public ClienteModel Adicionar(ClienteModel cliente)
        {          
            cliente.QtdEndereco = 1;
            cliente.QtdTelefone = 1;
            cliente.DataCadastro = DateTime.Now;

            _bancoContext.Cliente.Add(cliente);
            _bancoContext.SaveChanges();

            return cliente;
        }

        public bool Apagar(int id)
        {
            ClienteModel clienteDB = BuscarPorId(id);
            if (clienteDB == null)
            {
                throw new Exception("Houve um erro na Exclusão do Cliente!");
            }
            _bancoContext.Remove(clienteDB);
            _bancoContext.SaveChanges();

            return true;
        }

        public ClienteModel Atualizar(ClienteModel cliente)
        {
            ClienteModel clienteDB  = BuscarPorId(cliente.Id);
            if(clienteDB == null)
            {
                throw new Exception("Houve um erro na Atualização do Cliente!");
            }

            clienteDB.Nome = cliente.Nome;
            clienteDB.Email = cliente.Email;
            clienteDB.TipoCliente = cliente.TipoCliente;
            clienteDB.CPF_CNPJ = cliente.CPF_CNPJ;
            clienteDB.RG_IE = cliente.RG_IE;
            clienteDB.DataNascimento_DataFundacao = cliente.DataNascimento_DataFundacao;
            clienteDB.DataCadastro = cliente.DataCadastro;
            clienteDB.QtdEndereco = cliente.QtdEndereco;
            clienteDB.QtdTelefone = cliente.QtdTelefone;
            
            _bancoContext.Cliente.Update(clienteDB);
            _bancoContext.SaveChanges();

            return clienteDB;

        }

        public ClienteModel BuscarPorId(int id)
        {
            return _bancoContext.Cliente.FirstOrDefault(x => x.Id == id);
        }

        public List<ClienteModel> BuscarTodos()
        {
            return _bancoContext.Cliente.ToList();
        }
    }
}
