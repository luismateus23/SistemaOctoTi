using Microsoft.EntityFrameworkCore;
using SistemaOctoTi.Models;

namespace SistemaOctoTi.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options): base(options)
        {
        }

        public DbSet<ClienteModel> Cliente { get; set; }
        public DbSet<EnderecoModel> Endereco { get; set; } 
        public DbSet<TelefoneModel> Telefone { get; set; } 
    }
}
