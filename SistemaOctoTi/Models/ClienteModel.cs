using System;
using System.Collections;
using System.Collections.Generic;

namespace SistemaOctoTi.Models
{
    public class ClienteModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public int TipoCliente { get; set; }
        public string CPF_CNPJ { get; set; }
        public string RG_IE { get; set; }
        public DateTime DataNascimento_DataFundacao { get; set; }     
        public DateTime DataCadastro { get; set; }
        public int QtdTelefone { get; set; }
        public int QtdEndereco { get; set; }
        public ICollection<ClienteModel>  Clientes { get; set; }
        public ICollection<EnderecoModel> Enderecos { get; set; }
    }
}
