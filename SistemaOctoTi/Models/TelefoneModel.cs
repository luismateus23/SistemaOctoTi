namespace SistemaOctoTi.Models
{
    public class TelefoneModel
    {
        public int Id { get; set; }
        public int TipoTelefone { get; set; }
        public string DDD { get; set; }
        public string NumeroTelefone { get; set; }
        public ClienteModel CodigoCliente { get; set; }
    }
}
