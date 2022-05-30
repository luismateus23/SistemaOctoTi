using SistemaOctoTi.Data;
using SistemaOctoTi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaOctoTi.Repositories
{
    public class EnderecoRepositorio : IEnderecoRepositorio
    {
        private readonly BancoContext _bancoContext;
        public EnderecoRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }
        public EnderecoModel Adicionar(EnderecoModel endereco)
        {
            _bancoContext.Endereco.Add(endereco);
            _bancoContext.SaveChanges();

            return endereco;
        }

        public EnderecoModel Atualizar(EnderecoModel endereco)
        {
            EnderecoModel enderecoDB = BuscarPorId(endereco.Id);
            if(enderecoDB == null)
            {
                throw new Exception("Houve um erro na Atualização do Endereço!");
            }

            enderecoDB.TipoEndereco = endereco.TipoEndereco;
            enderecoDB.Logradouro = endereco.Logradouro;
            enderecoDB.Numero = endereco.Numero;
            enderecoDB.Complemento = endereco.Complemento;
            enderecoDB.Bairro = endereco.Bairro;
            enderecoDB.Cidade = endereco.Cidade;
            enderecoDB.UF = endereco.UF;
            enderecoDB.CEP = endereco.CEP;

            _bancoContext.Endereco.Update(enderecoDB);
            _bancoContext.SaveChanges();

            return enderecoDB;


        }

        public EnderecoModel BuscarPorId(int id)
        {
            return _bancoContext.Endereco.FirstOrDefault(x => x.Id == id);
        }

        public List<EnderecoModel> BuscarTodos()
        {
            return _bancoContext.Endereco.ToList();
        }
    }
}
